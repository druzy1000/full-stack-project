package com.ibm.fscc.loginservice.managers;

import java.util.List;

import com.ibm.fscc.loginservice.data.LoginEntity;

public interface ILoginManager {
	
	List<LoginEntity> getAllEmails();
	LoginEntity getUser(String email);
	
}
