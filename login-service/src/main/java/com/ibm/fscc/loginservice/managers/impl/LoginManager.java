package com.ibm.fscc.loginservice.managers.impl;


import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.ibm.fscc.loginservice.data.LoginEntity;
import com.ibm.fscc.loginservice.managers.ILoginManager;
import com.ibm.fscc.loginservice.repository.LoginRepository;

@Component
public class LoginManager implements ILoginManager {
	
	@Autowired
	LoginRepository loginRepository;


//	@Override
//	@RequestMapping(value = "/{email}", method = RequestMethod.GET)
//	public LoginEntity getUser(@PathVariable String email) {
//		LoginEntity loginEntity = loginRepository.getOne(email);
//      if (loginEntity == null) throw new UsernameNotFoundException(email);
//
//		return loginEntity;
//	}




	@Override
	public List<LoginEntity> getAllEmails() {
		return loginRepository.findAll();
	}


@Override
public LoginEntity getUser(String email) {
	// TODO Auto-generated method stub
	return null;
}



}
