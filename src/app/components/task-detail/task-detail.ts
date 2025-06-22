import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  standalone: true,
  selector: 'app-task-detail',
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.scss',
  imports: [CommonModule],
})
export class TaskDetail implements OnInit {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.tasks$.subscribe((tasks) => {
      this.task = tasks.find((t) => t.id === id);
    });
  }
}
