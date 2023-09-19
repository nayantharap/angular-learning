import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { obj } from '../shared/school-data';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [];

  constructor() {}

  getStudents(): Student[] {
    return this.students;
  }

  createStudent(student: Student): void {
    this.students.push(student);

    // Update the external data source (school-data.ts)
    if (obj[0]?.students) {
      // Ensure that division is always a string (fallback to an empty string if it's undefined)
      student.division = typeof student.division === 'string' ? student.division : '';

      obj[0].students.push({
        id: student.id,
        name: student.name,
        division: student.division,
        teacherId: student.teacherId,
      });
      console.log("obj[0] is",obj[0])
    }
  }
 
}
