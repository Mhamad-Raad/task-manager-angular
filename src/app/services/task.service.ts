import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = [];

  private taskSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.taskSubject.asObservable();

  addTask(title: string) {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.tasks.push(newTask);
    this.taskSubject.next(this.tasks);
  }

  toggleTask(id: number) {
    this.tasks = this.tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    this.taskSubject.next(this.tasks);
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.taskSubject.next(this.tasks);
  }
}
