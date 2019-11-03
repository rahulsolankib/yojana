import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UploadComponent } from './upload/upload.component';
import { DisasterComponent } from './disaster/disaster.component';
import { EmployeeComponent } from './employee/employee.component';
//import { KrishiVigyanKendraComponent } from './krishi-vigyan-kendra/krishi-vigyan-kendra.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'upload',component:UploadComponent},
  {path:'disaster',component:DisasterComponent},
  {path:'emp',component:EmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }                   
