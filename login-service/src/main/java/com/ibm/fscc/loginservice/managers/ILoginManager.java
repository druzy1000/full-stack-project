package com.ibm.fscc.loginservice.managers;

import com.ibm.fscc.loginservice.data.LoginEntity;

public interface ILoginManager {
	
	LoginEntity getUser(String email);
	
}
