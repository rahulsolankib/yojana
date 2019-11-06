import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DisasterComponent } from './disaster.component';
import { TranslateModule } from '@ngx-translate/core';
import { AccessDeniedRoutingModule } from '../access-denied/access-denied-routing.module';
// tslint:disable-next-line:no-unused-expression
import { DisasterRoutingModule } from './disaster-routing.module';



@NgModule({
  declarations: [DisasterComponent],
  imports: [
    CommonModule,
    TranslateModule,
    DisasterRoutingModule
  ]
})
export class DisasterModule { }
