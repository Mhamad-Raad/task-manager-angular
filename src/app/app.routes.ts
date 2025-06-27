import { Routes } from '@angular/router';
import { TaskList } from './components/task-list/task-list';
import { AddTask } from './components/add-task/add-task';
import { TaskDetail } from './components/task-detail/task-detail';

const prerenderTaskIds = ['1', '2', '3'];

export const routes: Routes = [
  { path: '', component: TaskList },
  { path: 'add', component: AddTask },
  {
    path: 'task/:id',
    component: TaskDetail,
    data: {
      getPrerenderParams: () => prerenderTaskIds.map((id) => ({ id })),
    },
  },
];
