package com.ibm.fscc.employeeservice.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ibm.fscc.employeeservice.data.EmployeeEntity;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long>{

	List<EmployeeEntity> findAllByOrderByIdAsc();
}