import { Observable, Subject } from 'rxjs';
import { Employee } from "../models/Employee";

export interface EmployeeStorageService {
	insert(employee : Employee) : Observable<Employee> ;
	remove(employee : Employee) : Observable<Employee> ;
	update(employee : Employee) : Observable<Employee> ;
	findById(employeeId : number) : Observable<Employee> ;
    findAll() : Observable<Employee[]> ;

    /* Compatibility Methods */

}         
