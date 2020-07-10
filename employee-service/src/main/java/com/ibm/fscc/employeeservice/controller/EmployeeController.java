package com.ibm.fscc.employeeservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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
	
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    EmployeeEntity getEmployee(@PathVariable Long id) {
    	System.out.println(id);
        return iEmployeeManager.getEmployeeById(id);
    }
    
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    EmployeeEntity createEmployee(@RequestBody EmployeeEntity employeeEntity) {
    	System.out.println(employeeEntity.toString());
    	return iEmployeeManager.createEmployee(employeeEntity);
    }
    
    @RequestMapping(value = "/edit/{id}", method = RequestMethod.PUT)
    EmployeeEntity updateEmployee(@PathVariable Long id,  @RequestBody EmployeeEntity employeeEntity) {
    	return iEmployeeManager.updateEmployee(id, employeeEntity);
    }
    
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    EmployeeEntity deleteEmployee(@PathVariable Long id) {
    	return null;
    }
    

}
