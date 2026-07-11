import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss'
})
export class IndustriesComponent {

  industries = [
    'IT Services',
    'BPO & Contact Centers',
    'Technology Companies',
    'Enterprise Support Organizations',
    'E-Commerce',
    'Professional Services'
  ];

}