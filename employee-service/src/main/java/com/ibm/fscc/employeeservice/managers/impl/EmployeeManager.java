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
		return employeeRepository.getOne(id);
	}

	@Override
	public EmployeeEntity createEmployee(EmployeeEntity employee) {
		return employeeRepository.saveAndFlush(employee);
	}

	@Override
	public EmployeeEntity updateEmployee(Long id, EmployeeEntity employee) {
		EmployeeEntity currentEmployee = employeeRepository.getOne(id);
		
		System.out.println(employee.getId() + "---" + id);
		
		if(currentEmployee == null || employee.getId() != id) {
			return null;
		}
		return employeeRepository.save(employee);
	}

	@Override
	public EmployeeEntity deleteEmployee(Long id) {
		EmployeeEntity employee = employeeRepository.getOne(id);
		if(employee == null) {
			return null;
		}
		employeeRepository.deleteById(id);
		return employee;
	}
}
