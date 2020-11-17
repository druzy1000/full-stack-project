package com.ibm.fscc.kafka.services;

import org.springframework.beans.factory.annotation.Autowired;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ibm.fscc.kafka.Entities.Employee;

@Service
public class KafkaService {
	//private static final Logger logger = LoggerFactory.getLogger(ProducerService.class);
	
	@Autowired
	ObjectMapper objectMapper;
    private final KafkaTemplate<Long, String> kafkaTemplate;
    private final String TOPIC = "employees";
    
    public KafkaService(KafkaTemplate<Long, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }
    
    public void sendEvent(Employee employee) throws JsonProcessingException {
    	Long key = employee.getId();
    	String value = objectMapper.writeValueAsString(employee);
    	kafkaTemplate.send(TOPIC, key, value);
    }
    
//	public void send(String message) {
////	    kafkaTemplate.send(TOPIC, message);
//		int key = 0;
//		key++;
//		System.out.print(key);
//		kafkaTemplate.send(TOPIC, 0, Integer.toString(key), message);
//	}
}
