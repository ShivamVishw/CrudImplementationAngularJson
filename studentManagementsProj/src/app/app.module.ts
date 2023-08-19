import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentsComponent } from './components/add-students/add-students.component';
import { EditStudentsComponent } from './components/edit-students/edit-students.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { LoginStudentsComponent } from './components/login-students/login-students.component';
import { RegistrationStudentsComponent } from './components/registration-students/registration-students.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentsComponent,
    EditStudentsComponent,
    ListStudentsComponent,
    LoginStudentsComponent,
    RegistrationStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
