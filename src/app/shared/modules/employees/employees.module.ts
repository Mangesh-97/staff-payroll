import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeTableComponent } from './employe-table/employe-table.component';
import { EmployeFormComponent } from './employe-form/employe-form.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmployeTableComponent,
    EmployeFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
