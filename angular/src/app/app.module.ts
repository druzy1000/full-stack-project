import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 

import { AddEditComponent } from './add-edit/add-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRestStorageService } from './employee-rest-storage/employee-rest-storage.service';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditComponent,
    EmployeeListComponent,
    NavbarComponent

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
    EmployeeRestStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
