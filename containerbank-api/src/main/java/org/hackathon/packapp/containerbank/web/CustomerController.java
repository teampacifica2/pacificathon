
package org.hackathon.packapp.containerbank.web;

import org.hackathon.packapp.containerbank.model.Customer;
import org.hackathon.packapp.containerbank.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;
import java.util.Collection;

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

    @RequestMapping(value = "/customers/new", method = RequestMethod.POST)
    public ResponseEntity processCreationForm(@Valid Customer customer) {
        this.bankService.saveCustomer(customer);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/customers", method = RequestMethod.GET)
    public ResponseEntity<Collection<Customer>> processFindForm(Customer customer) {

        // allow parameterless GET request for /customers to return all records
        if (customer.getLastName() == null) {
            customer.setLastName(""); // empty string signifies broadest possible search
        }

        // find customers by last name
        Collection<Customer> results = this.bankService.findCustomerByLastName(customer.getLastName());
        return new ResponseEntity(results, HttpStatus.OK);
    }

    @RequestMapping(value = "/customers/{customerId}/edit", method = RequestMethod.GET)
    public ResponseEntity<Customer> initUpdateCustomerForm(@PathVariable("customerId") int customerId) {
        return new ResponseEntity(this.bankService.findCustomerById(customerId), HttpStatus.OK);
    }

    @RequestMapping(value = "/customers/{customerId}/edit", method = RequestMethod.POST)
    public ResponseEntity processUpdateCustomerForm(@Valid Customer customer, @PathVariable("customerId") int customerId) {
        customer.setId(customerId);
        this.bankService.saveCustomer(customer);
        return new ResponseEntity(HttpStatus.OK);
    }

}
