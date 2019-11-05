import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UploadComponent } from './upload/upload.component';
import { DisasterComponent } from './disaster/disaster.component';
import { EventsComponent } from './events/events.component';
import { FormComponent } from './form/form.component';
// import { KrishiVigyanKendraComponent } from './krishi-vigyan-kendra/krishi-vigyan-kendra.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'upload', component: UploadComponent},
  {path: 'disaster', component: DisasterComponent},
  {path: 'events', component: EventsComponent},
  {path: 'form', component: FormComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
