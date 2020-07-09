package com.ibm.fscc.employeeservice.managers.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ibm.fscc.employeeservice.data.EmployeeEntity;
import com.ibm.fscc.employeeservice.managers.IEmployeeManager;
import com.ibm.fscc.employeeservice.repositories.EmployeeRepository;

@Component
public class EmployeeManager implements IEmployeeManager {
	
	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public List<EmployeeEntity> getAllEmployees() {
		return employeeRepository.findAll();
	}

	@Override
	public EmployeeEntity getEmployeeById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public EmployeeEntity createEmployee(EmployeeEntity employee) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public EmployeeEntity updateEmployee(Long id, EmployeeEntity employee) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public EmployeeEntity deleteEmployee(EmployeeEntity employee) {
		// TODO Auto-generated method stub
		return null;
	}

}
