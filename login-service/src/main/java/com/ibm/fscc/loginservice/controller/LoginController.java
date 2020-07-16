package com.ibm.fscc.loginservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.fscc.loginservice.data.LoginEntity;
import com.ibm.fscc.loginservice.managers.ILoginManager;
import com.ibm.fscc.loginservice.repository.LoginRepository;

@RestController
@RequestMapping(path="api/login")
public class LoginController {
	
	LoginRepository loginRepository;
	
	@Autowired
	private ILoginManager iLoginManager;

	@Autowired
	private Environment env;

	@GetMapping(path="/status/check")
	public String status() {
		return "Working on port " + env.getProperty("server.port");
	}
	

	@RequestMapping(method = RequestMethod.GET)
    public List<LoginEntity> getAllEmails() {
        return iLoginManager.getAllEmails();
    }
	
    @RequestMapping( method = RequestMethod.POST)
    LoginEntity getUser(@RequestBody String email) {
        return iLoginManager.getUser(email);
    }

}
