import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  standalone: true,
  selector: 'app-task-filters',
  templateUrl: './task-filters.html',
  styleUrl: './task-filters.scss',
  imports: [FormsModule],
})
export class TaskFiltersComponent {
  searchTerm = '';
  showCompleted: string = 'all';

  constructor(private taskService: TaskService) {}

  updateSearch() {
    this.taskService.setSearchTerm(this.searchTerm);
  }

  updateStatus() {
    const val = this.showCompleted;
    this.taskService.setShowCompleted(
      val === 'all' ? null : val === 'completed'
    );
  }
}
