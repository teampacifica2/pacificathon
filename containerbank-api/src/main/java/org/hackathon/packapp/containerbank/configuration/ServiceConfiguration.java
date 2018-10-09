package org.hackathon.packapp.containerbank.configuration;

import org.hackathon.packapp.containerbank.repository.CardRepository;
import org.hackathon.packapp.containerbank.service.BankService;
import org.hackathon.packapp.containerbank.web.AdvisorController;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/*@Configuration
@EnableJpaRepositories
@ComponentScan
@EnableTransactionManagement*/
//@ComponentScan(basePackageClasses = {AdvisorController.class, BankService.class, CardRepository.class, Advisor.class})
//@ComponentScan(basePackageClasses = {CardRepository.class})
//@ImportResource(value = {"classpath:spring/business-config.xml"})
@Configuration
@ComponentScan(basePackageClasses = {AdvisorController.class, CardRepository.class, BankService.class})
public class ServiceConfiguration {
}
