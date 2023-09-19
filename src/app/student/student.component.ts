import { Component, OnInit } from '@angular/core';
import { obj } from '../shared/school-data';
import { Router } from '@angular/router';

interface Students {
  id: number;
  name: string;
  division?: string;
  teacherId: number;
}

interface Teacher {
  id: number;
  name: string;
  subject: string;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  schoolData: any;
  selectedStudentTeachers: Teacher[] | null = null;
  selectedStudent: any = null;
  changesSaved: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.schoolData = obj[0];
  }

  showTeachers(studentId: number): void {
    const selectedStudent = this.schoolData.students.find((student: Students) => student.id === studentId);
    if (selectedStudent) {
      this.selectedStudentTeachers = this.schoolData.teachers.filter((teacher: Teacher) => teacher.id === selectedStudent.teacherId);
    }
  }
  navigateToCreateForm() {
    this.router.navigate(['/students/create']);
  }
  editStudent(student: any): void {
    this.selectedStudent = { ...student };
  }

  saveStudent(updatedStudent: any): void {
    if (updatedStudent) {
      const index = this.schoolData.students.findIndex(
        (student: Students) => student.id === updatedStudent.id
      );

      if (index !== -1) {
        this.schoolData.students[index].name = updatedStudent.name;
        this.schoolData.students[index].division = updatedStudent.division;
      }
      this.selectedStudent = null;
      this.changesSaved = true;
    }
  }

  cancelEdit(): void {
    this.selectedStudent = null;
  }
}
