import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

  testimonials = [
    {
      quote:
        'Global Workforce Solutions helped us build multilingual customer support teams across multiple regions.',
      company:
        'Operations Director'
    },
    {
      quote:
        'A reliable recruitment partner with excellent turnaround times and quality talent.',
      company:
        'HR Director'
    }
  ];

}