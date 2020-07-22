import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes = [
    // {
    //   path: 'login',
    //   component: LoginComponent
    // },
    {
      path: 'add',
      component: AddEditComponent,
    },
    { 
      path: "edit/:employeeId", 
      component: AddEditComponent,
    },
    {
      path: 'employeeList',
      component: EmployeeListComponent
    },
    { 
      path: '',
      redirectTo: '/employeeList',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
