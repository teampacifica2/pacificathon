
package org.hackathon.packapp.containerbank.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.hackathon.packapp.containerbank.model.Customer;
import org.hackathon.packapp.containerbank.model.Card;
import org.hackathon.packapp.containerbank.model.CardType;
import org.hackathon.packapp.containerbank.service.BankService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.StringUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.Collection;

/**
 * @author Wavestone
 */
@Controller
@RequestMapping("/customers/{customerId}")
public class CardController {

    private static final String VIEWS_cards_CREATE_OR_UPDATE_FORM = "cards/createOrUpdateCardForm";
    private final BankService bankService;

    @Autowired
    public CardController(BankService bankService) {
        this.bankService = bankService;
    }

    @ModelAttribute("types")
    public Collection<CardType> populateCardTypes() {
        return this.bankService.findCardTypes();
    }

    @ModelAttribute("customer")
    public Customer findCustomer(@PathVariable("customerId") int customerId) {
        return this.bankService.findCustomerById(customerId);
    }

    @InitBinder("customer")
    public void initCustomerBinder(WebDataBinder dataBinder) {
        dataBinder.setDisallowedFields("id");
    }

    @InitBinder("card")
    public void initCardBinder(WebDataBinder dataBinder) {
        dataBinder.setValidator(new CardValidator());
    }

    @RequestMapping(value = "/cards/new", method = RequestMethod.GET)
    public String initCreationForm(Customer customer, ModelMap model) {
        Card card = new Card();
        customer.addCard(card);
        model.put("card", card);
        return VIEWS_cards_CREATE_OR_UPDATE_FORM;
    }

    @RequestMapping(value = "/cards/new", method = RequestMethod.POST)
    public String processCreationForm(Customer customer, @Valid Card card, BindingResult result, ModelMap model) {
        if (StringUtils.hasLength(card.getName()) && card.isNew() && customer.getCard(card.getName(), true) != null){
            result.rejectValue("name", "duplicate", "already exists");
        }
        if (result.hasErrors()) {
            model.put("card", card);
            return VIEWS_cards_CREATE_OR_UPDATE_FORM;
        } else {
            customer.addCard(card);
            this.bankService.saveCard(card);
            return "redirect:/customers/{customerId}";
        }
    }

    @RequestMapping(value = "/cards/{cardId}/edit", method = RequestMethod.GET)
    public String initUpdateForm(@PathVariable("cardId") int cardId, ModelMap model) {
        Card card = this.bankService.findCardById(cardId);
        model.put("card", card);
        return VIEWS_cards_CREATE_OR_UPDATE_FORM;
    }

    @RequestMapping(value = "/cards/{cardId}/edit", method = RequestMethod.POST)
    public String processUpdateForm(@Valid Card card, BindingResult result, Customer customer, ModelMap model) {
        if (result.hasErrors()) {
            model.put("card", card);
            return VIEWS_cards_CREATE_OR_UPDATE_FORM;
        } else {
            customer.addCard(card);
            this.bankService.saveCard(card);
            return "redirect:/customers/{customerId}";
        }
    }

}
