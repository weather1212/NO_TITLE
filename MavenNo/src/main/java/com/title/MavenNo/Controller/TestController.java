package com.title.MavenNo.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/api/landingPage")
    public String landingPage(){
        return "hello";

    }
}
