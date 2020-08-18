import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'add',
      component: AddEditComponent,
    },
    { 
      path: "edit/:id", 
      component: AddEditComponent,
    },
    {
      path: 'employeeList',
      component: EmployeeListComponent
    },
    { 
      path: '',
      redirectTo: '/',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
