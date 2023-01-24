package com.title.MavenNo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = {"com.title.MavenNo.Controller"})
@SpringBootApplication
public class MavenNoApplication {

	public static void main(String[] args) {
		SpringApplication.run(MavenNoApplication.class, args);
	}

}
