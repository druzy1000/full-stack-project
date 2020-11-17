package com.ibm.fscc.kafka.controllers;

import java.util.List;

//import org.slf4j.LoggerFactory;
//import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ibm.fscc.kafka.Entities.Employee;
import com.ibm.fscc.kafka.services.KafkaService;



@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api")
public class KafkaController {
	
    //private static final Logger logger = LoggerFactory.getLogger(KafkaController.class);
    
	@Autowired
	KafkaService kafkaService;
	
	@Autowired
	private Environment env;
	
	ObjectMapper mapper = new ObjectMapper();
	
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
	
    @RequestMapping(value = "/produce", method = RequestMethod.GET)
	public String producer(@RequestBody Employee employee) throws Throwable {
    	kafkaService.sendEvent(employee);
		return "Added employee: " + employee;	
	}
    
}
