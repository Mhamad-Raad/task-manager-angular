import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { TaskService } from '../../services/task.service';

@Component({
  standalone: true,
  selector: 'app-add-task',
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss',
  imports: [ReactiveFormsModule],
})
export class AddTask {
  form: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  addTask() {
    if (this.form.valid) {
      this.taskService.addTask(this.form.value.title);
      this.form.reset();
    }
  }
}
