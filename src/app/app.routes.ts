import { Routes } from '@angular/router';
import { TaskList } from './components/task-list/task-list';
import { AddTask } from './components/add-task/add-task';

export const routes: Routes = [
  { path: '', component: TaskList },
  { path: 'add', component: AddTask },
];
