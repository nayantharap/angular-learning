import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreateStudentComponent } from './create-student.component';

@NgModule({
  declarations: [CreateStudentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: CreateStudentComponent },
    ]),
  ],
})
export class CreateStudentModule {}
