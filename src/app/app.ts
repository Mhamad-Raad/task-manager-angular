import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { TaskFiltersComponent } from './components/task-filters/task-filters';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TaskFiltersComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected title = 'task-manager';
  remainingTasks = 0;

  constructor(private taskService: TaskService) {
    this.taskService.tasks$.subscribe((tasks) => {
      this.remainingTasks = tasks.filter((t) => !t.completed).length;
    });
  }
}
