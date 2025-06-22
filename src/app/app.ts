import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

import { TaskFiltersComponent } from './components/task-filters/task-filters';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, TaskFiltersComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected title = 'task-manager';
}

// TODO
//  Filter with search
//  Reactive Form
//  API integration
