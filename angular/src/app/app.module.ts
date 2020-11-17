import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 

import { AddEditComponent } from './components/add-edit/add-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeRestStorageService } from './employee-rest-storage/employee-rest-storage.service';
import { LoginComponent } from './components/login/login.component';
import { MessagesComponent } from './messages/messages.component';


import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarService } from './services/navbar.service';

@NgModule({
  declarations: [
    AppComponent,
    AddEditComponent,
    EmployeeListComponent,
    LoginComponent,
    NavbarComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    EmployeeRestStorageService,
    NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
