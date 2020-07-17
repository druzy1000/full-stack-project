package com.ibm.fscc.loginservice.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ibm.fscc.loginservice.data.LoginEntity;

@Repository
public interface LoginRepository extends JpaRepository<LoginEntity, String> {
//	 public LoginEntity findByEmail(String email);

}
