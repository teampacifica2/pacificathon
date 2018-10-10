
package org.hackathon.packapp.containerbank.web;

import org.hackathon.packapp.containerbank.model.Customer;
import org.hackathon.packapp.containerbank.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

/**
 * @author Wavestone
 */
@RestController
public class CustomerController {

    private final BankService bankService;


    @Autowired
    public CustomerController(BankService bankService) {
        this.bankService = bankService;
    }


    @PostMapping(value = "/customers/new")
    public ResponseEntity processCreationForm(@Valid Customer customer) {
        this.bankService.saveCustomer(customer);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping(value = "/customers/{name}")
    public List<Customer> processFindForm(@PathVariable String name) {
        // find customers by last name
        List<Customer> results = this.bankService.findCustomerByLastName(name);
        return results;
    }

    @GetMapping(value = "/customers")
    public Iterable<Customer> findAllCustomers() {
        return this.bankService.findAllCustomers();
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
