import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeCrudRoutingModule } from './employee-crud-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [AddEmployeeComponent, EditEmployeeComponent, EmployeeDashboardComponent, EmployeeComponent],
  imports: [
    CommonModule,
    EmployeeCrudRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class EmployeeCrudModule { }
