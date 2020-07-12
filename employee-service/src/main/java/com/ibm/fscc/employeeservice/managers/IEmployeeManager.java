package com.ibm.fscc.employeeservice.managers;

import java.util.List;

import com.ibm.fscc.employeeservice.data.EmployeeEntity;

public interface IEmployeeManager  {

	List<EmployeeEntity> getAllEmployees();
	EmployeeEntity getEmployeeById(Long id);
	EmployeeEntity createEmployee(EmployeeEntity employeeEntity);
	EmployeeEntity updateEmployee(Long id, EmployeeEntity employeeEntity);
	EmployeeEntity deleteEmployee(Long id);
}
