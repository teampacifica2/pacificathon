package org.hackathon.packapp.containerbank.configuration;

import org.hackathon.packapp.containerbank.repository.CardRepository;
import org.hackathon.packapp.containerbank.service.BankService;
import org.hackathon.packapp.containerbank.web.AdvisorController;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackageClasses = {AdvisorController.class, BankService.class, CardRepository.class})
public class ServiceConfiguration {
}
