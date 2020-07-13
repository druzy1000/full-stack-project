package com.ibm.fscc.loginservice.managers.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ibm.fscc.loginservice.data.LoginEntity;
import com.ibm.fscc.loginservice.managers.iLoginManager;
import com.ibm.fscc.loginservice.repository.LoginRepository;

@Component
public class LoginManager implements iLoginManager {
	
	@Autowired
	LoginRepository loginRepository;

	public LoginEntity getUser(String email, String password) {
		return loginRepository.getOne(email);
	}

}
