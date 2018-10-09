package org.hackathon.packapp.containerbank;


import org.hackathon.packapp.containerbank.web.AdvisorController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ImportResource;


@SpringBootApplication
@ComponentScan(basePackageClasses = {AdvisorController.class})
//@ImportResource({"classpath:spring/business-config.xml"})
public class ContainerBankApplication {

    public static void main(String[] args) {
        SpringApplication.run(ContainerBankApplication.class, args);
    }
}



