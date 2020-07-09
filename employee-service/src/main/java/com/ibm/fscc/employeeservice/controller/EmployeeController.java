package com.ibm.fscc.employeeservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.fscc.employeeservice.data.EmployeeEntity;
import com.ibm.fscc.employeeservice.managers.IEmployeeManager;
import com.ibm.fscc.employeeservice.repositories.EmployeeRepository;

@RestController
@RequestMapping(path = "api/employee")
public class EmployeeController {
	
	EmployeeRepository employeeRepository;

	@Autowired
	private Environment env;
	
	@Autowired
	private IEmployeeManager iEmployeeManager;

	@GetMapping(path = "/status/check")
	public String status() {
		return "Working on port " + env.getProperty("server.port") + "!";
	}
	
	@RequestMapping(method = RequestMethod.GET)
    public List<EmployeeEntity> getAllEmployees() {
        return iEmployeeManager.getAllEmployees();
    }

}
