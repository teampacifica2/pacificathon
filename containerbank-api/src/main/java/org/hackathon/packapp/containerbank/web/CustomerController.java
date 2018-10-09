
package org.hackathon.packapp.containerbank.web;

import java.util.Collection;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.hackathon.packapp.containerbank.model.Customer;
import org.hackathon.packapp.containerbank.service.BankService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author Wavestone
 */
@Controller
public class CustomerController {

    private static final String VIEWS_customer_CREATE_OR_UPDATE_FORM = "customers/createOrUpdateCustomerForm";
    private final BankService bankService;


    @Autowired
    public CustomerController(BankService bankService) {
        this.bankService = bankService;
    }

    @InitBinder
    public void setAllowedFields(WebDataBinder dataBinder) {
        dataBinder.setDisallowedFields("id");
    }

    @RequestMapping(value = "/customers/new", method = RequestMethod.GET)
    public String initCreationForm(Map<String, Object> model) {
        Customer customer = new Customer();
        model.put("customer", customer);
        return VIEWS_customer_CREATE_OR_UPDATE_FORM;
    }

    @RequestMapping(value = "/customers/new", method = RequestMethod.POST)
    public String processCreationForm(@Valid Customer customer, BindingResult result) {
        if (result.hasErrors()) {
            return VIEWS_customer_CREATE_OR_UPDATE_FORM;
        } else {
            this.bankService.saveCustomer(customer);
            return "redirect:/customers/" + customer.getId();
        }
    }

    @RequestMapping(value = "/customers/find", method = RequestMethod.GET)
    public String initFindForm(Map<String, Object> model) {
        model.put("customer", new Customer());
        return "customers/findCustomers";
    }

    @RequestMapping(value = "/customers", method = RequestMethod.GET)
    public String processFindForm(Customer customer, BindingResult result, Map<String, Object> model) {

        // allow parameterless GET request for /customers to return all records
        if (customer.getLastName() == null) {
            customer.setLastName(""); // empty string signifies broadest possible search
        }

        // find customers by last name
        Collection<Customer> results = this.bankService.findCustomerByLastName(customer.getLastName());
        if (results.isEmpty()) {
            // no customers found
            result.rejectValue("lastName", "notFound", "not found");
            return "customers/findCustomers";
        } else if (results.size() == 1) {
            // 1 customer found
            customer = results.iterator().next();
            return "redirect:/customers/" + customer.getId();
        } else {
            // multiple customers found
            model.put("selections", results);
            return "customers/customersList";
        }
    }

    @RequestMapping(value = "/customers/{customerId}/edit", method = RequestMethod.GET)
    public String initUpdateCustomerForm(@PathVariable("customerId") int customerId, Model model) {
        Customer customer = this.bankService.findCustomerById(customerId);
        model.addAttribute(customer);
        return VIEWS_customer_CREATE_OR_UPDATE_FORM;
    }

    @RequestMapping(value = "/customers/{customerId}/edit", method = RequestMethod.POST)
    public String processUpdateCustomerForm(@Valid Customer customer, BindingResult result, @PathVariable("customerId") int customerId) {
        if (result.hasErrors()) {
            return VIEWS_customer_CREATE_OR_UPDATE_FORM;
        } else {
            customer.setId(customerId);
            this.bankService.saveCustomer(customer);
            return "redirect:/customers/{customerId}";
        }
    }

    /**
     * Custom handler for displaying an customer.
     *
     * @param customerId the ID of the customer to display
     * @return a ModelMap with the model attributes for the view
     */
    @RequestMapping("/customers/{customerId}")
    public ModelAndView showCustomer(@PathVariable("customerId") int customerId) {
        ModelAndView mav = new ModelAndView("customers/customerDetails");
        mav.addObject(this.bankService.findCustomerById(customerId));
        return mav;
    }

}
