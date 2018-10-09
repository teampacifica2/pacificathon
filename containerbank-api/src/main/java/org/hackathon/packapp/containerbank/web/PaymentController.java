
package org.hackathon.packapp.containerbank.web;

import org.hackathon.packapp.containerbank.model.Card;
import org.hackathon.packapp.containerbank.model.Payment;
import org.hackathon.packapp.containerbank.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

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

    // Spring MVC calls method loadCardWithPayment(...) before processNewPaymentForm is called
    @RequestMapping(value = "/customers/{customerId}/cards/{cardId}/payments/new", method = RequestMethod.POST)
    public ResponseEntity processNewPaymentForm(@Valid Payment payment) {
        this.bankService.savePayment(payment);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/customers/*/cards/{cardId}/payments", method = RequestMethod.GET)
    public ResponseEntity<List<Payment>> showPayments(@PathVariable int cardId, Map<String, Object> model) {
        return new ResponseEntity<>(this.bankService.findCardById(cardId).getPayments(), HttpStatus.OK);
    }

}
