import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';


import { HttpClientModule } from '@angular/common/http';
import { LoginserviceService } from './loginservice.service';
import {MaterialModule} from './modules/material.module';
import { FormsModule } from '@angular/forms';
import { UploadComponent } from './upload/upload.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { DisasterComponent } from './disaster/disaster.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    UploadComponent,
    DisasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    AngularFileUploaderModule
  ],
  providers: [LoginserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
