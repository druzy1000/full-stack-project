package com.ibm.fscc.kafka.services;


import org.apache.kafka.clients.consumer.ConsumerRecord;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonRawValue;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ibm.fscc.kafka.Entities.Employee;
import com.ibm.fscc.kafka.repositories.KafkaRepository;


@Component
public class ConsumerService {
	private static final Logger logger = LoggerFactory.getLogger(ConsumerService.class);
	ObjectMapper mapper = new ObjectMapper();
	
	@Autowired
	KafkaRepository kafkaRepository;

	@JsonRawValue
    @KafkaListener(topics = "employees", groupId = "group_id")
    public void consume(ConsumerRecord<String, String> record) throws JsonProcessingException {
    	Employee employeeEvent = mapper.readValue(record.value(), Employee.class);

    	kafkaRepository.save(employeeEvent);
        logger.info(String.format("$$$$ => Consumed message: %s", employeeEvent));


    }
}
