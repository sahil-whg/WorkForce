import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {

  steps = [
    'Understand Requirements',
    'Source Talent',
    'Evaluate Candidates',
    'Deploy Talent'
  ];

}