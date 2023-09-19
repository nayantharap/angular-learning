import { Component, OnInit } from '@angular/core';
import { obj } from '../shared/school-data';  // Import the data
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  constructor() { }

  schoolData: any; // Declare a variable to hold the data

  ngOnInit(): void {
    this.schoolData = obj[0]; // Assign the data to the variable
  }

}
