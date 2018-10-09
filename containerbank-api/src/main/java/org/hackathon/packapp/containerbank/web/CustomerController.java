
package org.hackathon.packapp.containerbank.web;

import org.hackathon.packapp.containerbank.model.Customer;
import org.hackathon.packapp.containerbank.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * @author Wavestone
 */
@RestController
public class CustomerController {

    private static final String VIEWS_customer_CREATE_OR_UPDATE_FORM = "customers/createOrUpdateCustomerForm";
    private final BankService bankService;


    @Autowired
    public CustomerController(BankService bankService) {
        this.bankService = bankService;
    }

/*
    @InitBinder
    public void setAllowedFields(WebDataBinder dataBinder) {
        dataBinder.setDisallowedFields("id");
    }
*/

    @PostMapping(value = "/customers/new")
    public ResponseEntity processCreationForm(@Valid Customer customer) {
        this.bankService.saveCustomer(customer);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping(value = "/customers")
    public List<Customer> processFindForm(@RequestParam String customer) {

        // allow parameterless GET request for /customers to return all records
     /*   if (customer.getLastName() == null) {
            customer.setLastName(""); // empty string signifies broadest possible search
        }
*/
        // find customers by last name
        List<Customer> results = this.bankService.findCustomerByLastName(customer);
        return results;
    }

    @GetMapping(value = "/customers/{customerId}/edit")
    public ResponseEntity<Customer> initUpdateCustomerForm(@PathVariable("customerId") int customerId) {
        return new ResponseEntity(this.bankService.findCustomerById(customerId), HttpStatus.OK);
    }

    @PostMapping(value = "/customers/{customerId}/edit")
    public ResponseEntity processUpdateCustomerForm(@Valid Customer customer, @PathVariable("customerId") int customerId) {
        customer.setId(customerId);
        this.bankService.saveCustomer(customer);
        return new ResponseEntity(HttpStatus.OK);
    }

}
