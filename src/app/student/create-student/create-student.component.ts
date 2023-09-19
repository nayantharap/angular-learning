import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { obj } from 'src/app/shared/school-data';
interface Teacher {
  id: number;
  name: string;
  subject: string;
}

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})

export class CreateStudentComponent implements OnInit {
  studentForm!: FormGroup; //By adding the ! after studentForm, you're telling TypeScript that this property will be initialized in the ngOnInit method, and it doesn't need an initializer in the constructor. 
  teachers: Teacher[] = []; // Define the Teacher interface

  constructor(private fb: FormBuilder, private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      class: ['', [Validators.required]],
      division: ['A', Validators.required],
      teacherId: [''], // This is where we'll store the selected teacher's ID
    });

    // Fetch the list of teachers from your data source (e.g., API or service)
    this.teachers = obj[0].teachers; // Assuming obj contains your school data
  }

  onSubmit(): void {
    console.log("This function called now !!!!!!")
    if (this.studentForm.valid) {
      const student: Student = this.studentForm.value;
      console.log("student !!!!!!",student)
      this.studentService.createStudent(student);

      this.studentForm.reset();
    }
  }
}
