import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-training-development',
  standalone:true,
  imports: [CommonModule, RouterLink],
  templateUrl: './training-development.html',
  styleUrl: './training-development.scss',
})
export class TrainingDevelopment {
   programs = [
    {
      title: 'FIOP - 1',
      date: '25 May 2026 - 29 May 2026',
      route: '/training-development/fiop-1'
    },
    {
      title: 'FIOP - 2',
      date: '06 July 2026 - 10 July 2026',
      route: '/training-development/fiop-2'
    }
  ];

}
