package com.ibm.fscc.loginservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.fscc.loginservice.data.LoginEntity;
import com.ibm.fscc.loginservice.managers.iLoginManager;
import com.ibm.fscc.loginservice.repository.LoginRepository;

@RestController
@RequestMapping(path="/login")
public class LoginController {
	
	LoginRepository loginRepository;

	@Autowired
	private Environment env;

	@GetMapping(path="/status/check")
	public String status() {
		return "Working on port " + env.getProperty("server.port");
	}
	
    @RequestMapping(method = RequestMethod.GET)
    LoginEntity getUser(@RequestBody String email, String password) {
        return iLoginManager.getUser(email,password);
    }

}
