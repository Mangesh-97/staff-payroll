import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceTableComponent } from './attendace-table/attendance-table/attendance-table.component';
import { AttendanceFormComponent } from './attendance-form/attendance-form.component';
import { MaterialModule } from '../material/material.module';
import { AppModule } from 'src/app/app.module';



@NgModule({
  declarations: [
    AttendanceTableComponent,
    AttendanceFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    
  ]
})
export class AttendanceModule { }