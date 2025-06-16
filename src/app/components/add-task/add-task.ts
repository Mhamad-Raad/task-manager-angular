import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  standalone: true,
  selector: 'app-add-task',
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss',
  imports: [FormsModule],
})
export class AddTask {
  title: string = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    const trimmed = this.title.trim();
    if (trimmed) {
      this.taskService.addTask(trimmed);
      this.title = '';
    }
  }
}
