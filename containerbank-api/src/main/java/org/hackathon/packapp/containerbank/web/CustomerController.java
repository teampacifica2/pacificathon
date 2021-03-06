
package org.hackathon.packapp.containerbank.web;

import org.hackathon.packapp.containerbank.model.Customer;
import org.hackathon.packapp.containerbank.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Wavestone
 */
@RestController
@CrossOrigin(origins = "*")
public class CustomerController {

    private final BankService bankService;


    @Autowired
    public CustomerController(BankService bankService) {
        this.bankService = bankService;
    }


    @PostMapping(value = "/customers/new")
    public ResponseEntity processCreationForm(@RequestBody Customer customer) {
        this.bankService.saveCustomer(customer);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping(value = "/customers/_search")
    public List<Customer> processFindForm(@RequestParam(value = "name") String name) {
        // find customers by last name
        List<Customer> results = this.bankService.findCustomerByLastName(name);
        return results;
    }

    @GetMapping(value = "/customers")
    public ResponseEntity<Iterable<Customer>> findAllCustomers() {
        return new ResponseEntity(this.bankService.findAllCustomers(), HttpStatus.OK);
    }

    @GetMapping(value = "/customers/{customerId}")
    public ResponseEntity<Customer> getCustomer(@PathVariable("customerId") int customerId) {
        return new ResponseEntity(this.bankService.findCustomerById(customerId), HttpStatus.OK);
    }

    @GetMapping(value = "/customers/{customerId}/edit")
    public ResponseEntity<Customer> initUpdateCustomerForm(@PathVariable("customerId") int customerId) {
        return new ResponseEntity(this.bankService.findCustomerById(customerId), HttpStatus.OK);
    }

    @PostMapping(value = "/customers/{customerId}/edit")
    public ResponseEntity processUpdateCustomerForm(@RequestBody Customer customer, @PathVariable("customerId") int customerId) {
        customer.setId(customerId);
        this.bankService.saveCustomer(customer);
        return new ResponseEntity(HttpStatus.OK);
    }

}
