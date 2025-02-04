package com.example.firstWebAppfinal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
public class control {
        public control() {
        }

        @RequestMapping({"/test"})
        public String hello() {
            return "";
        }
    }


