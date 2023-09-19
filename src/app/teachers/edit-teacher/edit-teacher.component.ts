import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent {
  @Input() teacher: any; // Input property to receive the teacher data from the parent component
  @Output() save = new EventEmitter(); // Output event to notify the parent component when the teacher is saved
  @Output() cancel = new EventEmitter(); // Output event to notify the parent component when editing is canceled

  saveTeacher() {
    console.log("this.tecaher in edit component",this.teacher)
    // Emit the save event with the edited teacher data
    this.save.emit(this.teacher);
  }

  cancelEdit() {
    // Emit the cancel event to indicate that editing is canceled
    this.cancel.emit();
  }
}
