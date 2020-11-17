package com.ibm.fscc.employeeservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.fscc.employeeservice.data.EmployeeEntity;
import com.ibm.fscc.employeeservice.managers.IEmployeeManager;
import com.ibm.fscc.employeeservice.repositories.EmployeeRepository;

import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api")
public class EmployeeController {
	
	EmployeeRepository employeeRepository;
	

	@Autowired
	private Environment env;
	
	@Autowired
	private IEmployeeManager iEmployeeManager;
	
	@Autowired
	private DiscoveryClient discoveryClient;

	@RequestMapping("/service-instances/{applicationName}")
	public List<ServiceInstance> serviceInstancesByApplicationName(
			@PathVariable String applicationName) {
		return this.discoveryClient.getInstances(applicationName);
	}

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
        return iEmployeeManager.getEmployeeById(id);
    }
    
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    EmployeeEntity createEmployee(@RequestBody EmployeeEntity employeeEntity) {
    	System.out.println(employeeEntity.toString());
    	return iEmployeeManager.createEmployee(employeeEntity);
    }
    
    @RequestMapping(value = "/edit/{id}", method = RequestMethod.PUT)
    EmployeeEntity updateEmployee(@PathVariable Long id, @RequestBody EmployeeEntity employeeEntity) {
    	return iEmployeeManager.updateEmployee(id, employeeEntity);
    }
    
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    void deleteEmployee(@PathVariable Long id) {
    	iEmployeeManager.deleteEmployee(id);
    }
    
}
