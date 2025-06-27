import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { Task } from '../models/task.model';

const STORAGE_KEY = 'tasks';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = new BehaviorSubject<Task[]>(this.loadFromStorage());
  tasks$ = this.tasks.asObservable();

  private searchTerm = new BehaviorSubject<string>('');
  searchTerm$ = this.searchTerm.asObservable();

  private showCompleted = new BehaviorSubject<boolean | null>(null);
  showCompleted$ = this.showCompleted.asObservable();

  filteredTasks$ = combineLatest([
    this.tasks$,
    this.searchTerm$,
    this.showCompleted$,
  ]).pipe(
    map(([tasks, term, completed]) => {
      return tasks.filter((task) => {
        const matchesTerm = task.title
          .toLowerCase()
          .includes(term.toLowerCase());
        const matchesStatus =
          completed === null ? true : task.completed === completed;
        return matchesTerm && matchesStatus;
      });
    })
  );

  constructor() {
    this.tasks$.subscribe((tasks) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    });
  }

  setSearchTerm(term: string) {
    this.searchTerm.next(term);
  }

  setShowCompleted(filter: boolean | null) {
    this.showCompleted.next(filter);
  }

  addTask(title: string) {
    const newTask: Task = { id: Date.now(), title, completed: false };
    this.tasks.next([...this.tasks.getValue(), newTask]);
  }

  toggleTask(id: number) {
    const updated = this.tasks
      .getValue()
      .map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
    this.tasks.next(updated);
  }

  deleteTask(id: number) {
    const updated = this.tasks.getValue().filter((t) => t.id !== id);
    this.tasks.next(updated);
  }

  private loadFromStorage(): Task[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
}
