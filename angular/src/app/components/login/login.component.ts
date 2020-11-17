import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Employee } from '../../models/Employee';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading = false;

  data = {
    email: "root@ibm.com",
    password: "password"
  }

  constructor(private formBuilder: FormBuilder,
               private router: Router) { }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  createForm(){
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.minLength(8),Validators.maxLength(35), Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8),Validators.maxLength(35)]]
      });
  }

  // get email() { return this.loginForm.get('email'); }
  // get password() {return this.loginForm.get('password'); }

  // onSubmit(){
  //   console.log(this.loginForm.value.email,this.loginForm.value.password)
  // }

  onSubmit() {
    this.submitted = true;
    console.log('Was Clicked')
      if(this.loginForm.invalid){
        console.log("invalid")
        return;
      }
      this.loading = true;
      if (this.loginForm.value.email !== this.data.email && this.loginForm.value.password !== this.data.password) {
         alert("Login Failed");
         return;
      }
        //alert('Login is Good')
        this.router.navigate(['employees'])
  }

  

   ngOnInit() {
    this.createForm();
  }
}


