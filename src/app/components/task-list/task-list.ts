import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  standalone: true,
  selector: 'app-task-list',
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
  imports: [CommonModule],
})
export class TaskList implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  toggle(id: number) {
    this.taskService.toggleTask(id);
  }

  delete(id: number) {
    this.taskService.deleteTask(id);
  }
}
