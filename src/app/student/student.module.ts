import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule } from '@angular/forms'; 
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { AppTableModule } from '../shared/tables/tables.module';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';



@NgModule({
  declarations: [
    StudentComponent,
    EditStudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    AppTableModule  ,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StudentModule { }
