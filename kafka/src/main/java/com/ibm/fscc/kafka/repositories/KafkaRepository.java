package com.ibm.fscc.kafka.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ibm.fscc.kafka.Entities.Employee;

@Repository
public interface KafkaRepository extends JpaRepository<Employee, Long> {

}
