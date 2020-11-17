import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { LoginComponent } from './components/login/login.component';


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
      path: 'employees',
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
