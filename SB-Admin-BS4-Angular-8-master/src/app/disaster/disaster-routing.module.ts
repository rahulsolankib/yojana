import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DisasterComponent } from './disaster.component';

const routes: Routes = [
    {
        path: 'disaster',
        component: DisasterComponent
    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DisasterRoutingModule { }
