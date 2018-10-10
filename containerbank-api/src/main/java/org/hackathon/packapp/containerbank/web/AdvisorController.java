
package org.hackathon.packapp.containerbank.web;

import org.hackathon.packapp.containerbank.model.Advisors;
import org.hackathon.packapp.containerbank.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Wavestone
 */
@RestController
public class AdvisorController {

    private final BankService bankService;


    @Autowired
    public AdvisorController(BankService bankService) {
        this.bankService = bankService;
    }


    @GetMapping(value = {"/advisors"})
    @ResponseBody
    public ResponseEntity<List<Advisors>> showResourcesAdvisorList() {
        // Here we are returning an object of type 'Advisors' rather than a collection of Advisor objects
        // so it is simpler for JSon/Object mapping
        Advisors advisors = new Advisors();
        advisors.getAdvisorList().addAll(this.bankService.findAdvisors());
        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");
        return new ResponseEntity(advisors.getAdvisorList(), headers, HttpStatus.OK);
    }

}
