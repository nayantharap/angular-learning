import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
// import { AppTableComponent } from '../shared/tables/tables.component';
import { AppTableModule } from '../shared/tables/tables.module';
import { FormsModule } from '@angular/forms';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';

@NgModule({
  declarations: [TeachersComponent, EditTeacherComponent],
  imports: [CommonModule, TeachersRoutingModule, FormsModule,AppTableModule],
})
export class TeachersModule {}
