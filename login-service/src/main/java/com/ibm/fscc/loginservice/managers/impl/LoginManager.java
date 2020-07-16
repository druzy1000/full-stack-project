package com.ibm.fscc.loginservice.managers.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ibm.fscc.loginservice.data.LoginEntity;
import com.ibm.fscc.loginservice.managers.ILoginManager;
import com.ibm.fscc.loginservice.repository.LoginRepository;

@Component
public class LoginManager implements ILoginManager {
	
	@Autowired
	LoginRepository loginRepository;


	@Override
	public LoginEntity getUser(String email) {
		return loginRepository.findById(email);
	}

}
