import { Component, OnInit } from '@angular/core';

import { obj } from '../shared/school-data';
interface Teacher {
  id: number;
  name: string;
  subject: string;
}

interface Student {
  id: number;
  name: string;
  division: string;
  teacherId: number;
}
interface Teacher {
  id: number;
  name: string;
  subject: string;
}

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  schoolData: any;
  selectedTeacherStudents: Student[] | null = null;
  selectedTeacher: any = null;
  changesSaved: boolean = false;

  ngOnInit(): void {
    this.schoolData = obj[0];
  }

  showStudents(teacherId: number): void {
    const selectedTeacher = this.schoolData.teachers.find((teacher: Teacher) => teacher.id === teacherId);
    if (selectedTeacher) {
      this.selectedTeacherStudents = this.schoolData.students.filter((student: Student) => student.teacherId === teacherId);
      console.log("selectedTeacherStudents!!",this.selectedTeacherStudents)
    }
  }
  
  editTeacher(teacher: any): void {
    this.selectedTeacher = { ...teacher };
  }

  saveTeacher(updatedTeacher: any): void {
    if (updatedTeacher) {
      // Find the selected teacher in the schoolData array
      const index = this.schoolData.teachers.findIndex(
        (teacher: Teacher) => teacher.id === updatedTeacher.id
      );

      if (index !== -1) {
        // Update the schoolData array in UI
        this.schoolData.teachers[index].name = updatedTeacher.name;
        this.schoolData.teachers[index].subject = updatedTeacher.subject;
      }
      // Clear the selectedTeacher object
      this.selectedTeacher = null;
      this.changesSaved = true;
    }
  }

  cancelEdit(): void {
    this.selectedTeacher = null; // Clear the selectedTeacher object
  }

}
