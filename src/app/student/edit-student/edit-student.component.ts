import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {

 @Input() student: any; // Input property to receive the student data from the parent component
  @Output() save = new EventEmitter(); // Output event to notify the parent component when the student is saved
  @Output() cancel = new EventEmitter(); // Output event to notify the parent component when editing is canceled

  saveStudent() {
    console.log("this.student in edit component",this.student)
    // Emit the save event with the edited student data
    this.save.emit(this.student);
  }

  cancelEdit() {
    // Emit the cancel event to indicate that editing is canceled
    this.cancel.emit();
  }
}
