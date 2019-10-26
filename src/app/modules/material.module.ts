import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';


import { NgModule } from '@angular/core';
import {MatButtonModule, MatButtonToggleModule, MatIconModule, MatBadgeModule, MatExpansionModule} from '@angular/material';
//import {MatTreeModule} from '@angular/material/tree';
import {MatTableModule} from '@angular/material/table';

const MaterialComponents=[
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatExpansionModule,
  MatToolbarModule,
  MatInputModule,
  BrowserAnimationsModule,
  MatTableModule,
  
]

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
