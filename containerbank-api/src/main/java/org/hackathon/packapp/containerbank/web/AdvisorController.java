
package org.hackathon.packapp.containerbank.web;

import org.hackathon.packapp.containerbank.model.Advisors;
import org.hackathon.packapp.containerbank.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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
    public Advisors showResourcesAdvisorList() {
        // Here we are returning an object of type 'Advisors' rather than a collection of Advisor objects
        // so it is simpler for JSon/Object mapping
        Advisors advisors = new Advisors();
        advisors.getAdvisorList().addAll(this.bankService.findAdvisors());
        return advisors;
    }

}
