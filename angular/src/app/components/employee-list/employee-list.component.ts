import { Component, OnInit} from '@angular/core';
import { Employee } from '../../models/Employee'
import { EmployeeRestStorageService } from '../../employee-rest-storage/employee-rest-storage.service';
import { filter, map, retry, startWith, switchMap, take, takeUntil, takeWhile, timeout } from 'rxjs/operators';
import { interval, Subject } from 'rxjs';
import { NavbarService } from '../../services/navbar.service'

export interface ServerResponse{
  generated: boolean
}


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  employees: Employee[];
  polling$: any;
  isClicked: boolean = false;
  buttonName:any = 'Delete';
  buttonClass:any = "btn btn-danger";
  title: string;

  constructor(
    private employeeRestStorageService: EmployeeRestStorageService,
    private nav: NavbarService
    ) {}


  getEmployeesFromService(){
    // this.polling$ = interval(2000).pipe(startWith(0),switchMap(_ => this.employeeRestStorageService.getEmployees$()))
    // .subscribe(data => this.employees = data, error => console.error(error))

     this.employeeRestStorageService.getEmployees$().subscribe((data)=> {this.employees = data, console.log(data)});
  }

  onDeleteEmployee(id){
      this.employeeRestStorageService.deleteEmployee(id).subscribe((data) =>{
      this.getEmployeesFromService()
    },
    error => {
      console.error("Error deleting employee with id = ", id, error )
    })
  }

  showSection() {
    this.isClicked = !this.isClicked;
    if(this.isClicked){
      this.buttonName = 'Cancel'
      this.buttonClass = 'btn btn-secondary'
    }
    else{
      this.buttonName ='Delete'
      this.buttonClass = 'btn btn-danger'
      
    }
  }

  ngOnInit() {
    this.nav.show();
    this.nav.setTitle(this.title)
    this.getEmployeesFromService();
  }
  ngOnDestroy() {
 
}

}







