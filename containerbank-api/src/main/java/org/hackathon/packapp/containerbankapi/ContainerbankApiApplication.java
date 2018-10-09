package org.hackathon.packapp.containerbankapi;

import org.hackathon.packapp.containerbank.configuration.ServiceConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import(value = {ServiceConfiguration.class})
public class ContainerbankApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ContainerbankApiApplication.class, args);
	}
}
