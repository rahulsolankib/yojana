import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
import { CustomersComponent } from './customers/customers.component';
import { SchemesComponent } from './schemes/schemes.component';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule],
    declarations: [TablesComponent, CustomersComponent, SchemesComponent]
})
export class TablesModule {}
