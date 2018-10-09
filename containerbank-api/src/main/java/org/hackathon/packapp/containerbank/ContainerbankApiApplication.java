package org.hackathon.packapp.containerbank;

import org.hackathon.packapp.containerbank.configuration.DataSourcesConfiguration;
import org.hackathon.packapp.containerbank.configuration.ServiceConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
//@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
@Import(value = {ServiceConfiguration.class, DataSourcesConfiguration.class})
public class ContainerbankApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(ContainerbankApiApplication.class, args);
    }
}
