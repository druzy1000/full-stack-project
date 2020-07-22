import { Component, OnInit} from '@angular/core';
import { Employee } from '../models/Employee'
import { EmployeeRestStorageService } from '../employee-rest-storage/employee-rest-storage.service';


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeRestStorageService: EmployeeRestStorageService) {}


  getEmployeesFromService(){
    this.employeeRestStorageService.getEmployees()
    .subscribe(data => {this.employees = data, console.log(this.employees)});
  }

  ngOnInit() {
    this.getEmployeesFromService();
  }

  
}







