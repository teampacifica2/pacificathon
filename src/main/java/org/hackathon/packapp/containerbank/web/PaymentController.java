
package org.hackathon.packapp.containerbank.web;

import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.hackathon.packapp.containerbank.model.Card;
import org.hackathon.packapp.containerbank.model.Payment;
import org.hackathon.packapp.containerbank.service.BankService;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @author Wavestone
 */
@Controller
public class PaymentController {

    private final BankService bankService;


    @Autowired
    public PaymentController(BankService bankService) {
        this.bankService = bankService;
    }

    @InitBinder
    public void setAllowedFields(WebDataBinder dataBinder) {
        dataBinder.setDisallowedFields("id");
    }

    /**
     * Called before each and every @RequestMapping annotated method.
     * 2 goals:
     * - Make sure we always have fresh data
     * - Since we do not use the session scope, make sure that Card object always has an id
     * (Even though id is not part of the form fields)
     *
     * @param cardId
     * @return Card
     */
    @ModelAttribute("payment")
    public Payment loadCardWithPayment(@PathVariable("cardId") int cardId) {
        Card card = this.bankService.findCardById(cardId);
        Payment payment = new Payment();
        card.addPayment(payment);
        return payment;
    }

    // Spring MVC calls method loadCardWithPayment(...) before initNewPaymentForm is called
    @RequestMapping(value = "/customers/*/cards/{cardId}/payments/new", method = RequestMethod.GET)
    public String initNewPaymentForm(@PathVariable("cardId") int cardId, Map<String, Object> model) {
        return "cards/createOrUpdatePaymentForm";
    }

    // Spring MVC calls method loadCardWithPayment(...) before processNewPaymentForm is called
    @RequestMapping(value = "/customers/{customerId}/cards/{cardId}/payments/new", method = RequestMethod.POST)
    public String processNewPaymentForm(@Valid Payment payment, BindingResult result) {
        if (result.hasErrors()) {
            return "cards/createOrUpdatePaymentForm";
        } else {
            this.bankService.savePayment(payment);
            return "redirect:/customers/{customerId}";
        }
    }

    @RequestMapping(value = "/customers/*/cards/{cardId}/payments", method = RequestMethod.GET)
    public String showPayments(@PathVariable int cardId, Map<String, Object> model) {
        model.put("payments", this.bankService.findCardById(cardId).getPayments());
        return "paymentList";
    }

}
