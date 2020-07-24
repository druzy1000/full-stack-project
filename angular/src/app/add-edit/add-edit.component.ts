import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from "@angular/forms";
import { Location, LocationStrategy } from '@angular/common';
import {Employee} from '../models/Employee';
import { EmployeeRestStorageService } from '../employee-rest-storage/employee-rest-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
// import { EmloyeeList } from '../employee-list/employee-list.component'

@Component({
  selector: 'add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  addEditForm : FormGroup;
  submitted = false;
  loading= false;
  @Input() employee;



  constructor(private employeeRestStorageService: EmployeeRestStorageService, 
              private formBuilder: FormBuilder,
              private route:ActivatedRoute,
              private router: Router) 
              {}

  get f() { return this.addEditForm.controls; }

  createForm() {
    this.addEditForm = this.formBuilder.group({
      firstName: ['',[Validators.required, Validators.minLength(2),Validators.maxLength(35), Validators.pattern("[A-Za-z]*")]],
      lastName: ['',[Validators.required, Validators.minLength(2),Validators.maxLength(35), Validators.pattern("[A-Za-z]*")]],
      address: ['',[Validators.required, Validators.minLength(10),Validators.maxLength(50), Validators.pattern("[A-Za-z\\'\\- 0-9]*")]],
      city: ['',[Validators.required, Validators.minLength(5),Validators.maxLength(50), Validators.pattern("[A-Za-z ]*")]],
      state: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern("[A-Za-z]*")]],
      zip: ['',[Validators.required, Validators.minLength(5),Validators.maxLength(9), Validators.pattern("[0-9]*")]],
      homePhone: ['',[Validators.required, Validators.minLength(10),Validators.maxLength(10), Validators.pattern("[0-9]*")]],
      cellPhone: ['',[Validators.required, Validators.minLength(10),Validators.maxLength(10), Validators.pattern("[0-9]*")]],
      email: ['',[Validators.required, Validators.minLength(10),Validators.maxLength(50),Validators.email]]
    });
  }
    get id() { return this.addEditForm.get('id'); }
    get firstName() { return this.addEditForm.get('firstName'); }
    get lastName() { return this.addEditForm.get('lastName'); }
    get address() { return this.addEditForm.get('address'); }
    get city() { return this.addEditForm.get('city'); }
    get state() { return this.addEditForm.get('state'); }
    get zip() { return this.addEditForm.get('zip'); }
    get homePhone() { return this.addEditForm.get('homePhone'); }
    get cellPhone() { return this.addEditForm.get('cellPhone'); }
    get email() { return this.addEditForm.get('email'); }

onAddEmployee() {
  this.submitted = true;
  if (this.addEditForm.invalid) {
    console.log("Invalid")
      return;
  }
  this.loading = true;
  this.employeeRestStorageService.addEmployee(this.addEditForm.value)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate(['/employeeList']);
          },
          error => {
              this.loading = false;
          });
}

onUpdateEmployee() {
  this.submitted = true;
  if (this.addEditForm.invalid) {
    console.log("Invalid")
      return;
  }
  this.extractEmployeeFromForm();
  this.loading = true;
  this.employeeRestStorageService.updateEmployee(this.employee).subscribe(
    () => this.router.navigate(['employeeList'])
  )
}

onSubmit(){
  if(this.employee.employeeId === null){
    this.onAddEmployee();
  }
  else {
    this.onUpdateEmployee();
  }

}

getEmployee(employeeId:number) {
  console.log(employeeId)
  if(employeeId === 0){
    this.employee = {
      id: null,
      userId: null,
      firstName: null,
      lastName: null,
      address: null,
      city: null,
      state: null,
      zip: null,
      homePhone: null,
      cellPhone: null,
      email: null,
      // password: null
    }
  }
  else{
    this.employee = this.employeeRestStorageService.getEmployee(employeeId)
      .subscribe(employee => {
        this.employee = employee;
        this.addEditForm.setValue({
          firstName: this.employee.firstName,
          lastName: this.employee.lastName,
          address: this.employee.address,
          city: this.employee.city,
          state: this.employee.state,
          zip: this.employee.zip,
          homePhone: this.employee.homePhone,
          cellPhone: this.employee.cellPhone,
          email: this.employee.email
        })

      })
  }
}
extractEmployeeFromForm() {
  this.employee.firstName =  this.addEditForm.value.firstName;
  this.employee.lastName = this.addEditForm.value.lastName;
  this.employee.address = this.addEditForm.value.address;
  this.employee.city = this.addEditForm.value.city;
  this.employee.state = this.addEditForm.value.state;
  this.employee.zip = this.addEditForm.value.zip;
  this.employee.homePhone = this.addEditForm.value.homePhone;
  this.employee.cellPhone = this.addEditForm.value.cellPhone;
  this.employee.email = this.addEditForm.value.email;
}

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
     const id = +params.get('id')
      this.getEmployee(id);
    })
    this.createForm();
  }
  

}

