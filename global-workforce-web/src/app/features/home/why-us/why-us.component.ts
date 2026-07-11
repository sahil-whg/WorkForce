import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss'
})
export class WhyUsComponent {

  reasons = [
    {
      title: 'Global Reach',
      description: 'Access multilingual talent across international markets.'
    },
    {
      title: 'Faster Hiring',
      description: 'Reduce hiring timelines with streamlined recruitment.'
    },
    {
      title: 'Quality Screening',
      description: 'Technical and language assessments before deployment.'
    },
    {
      title: 'Flexible Engagement',
      description: 'Contract, permanent and remote staffing models.'
    },
    {
      title: 'Industry Expertise',
      description: 'Specialized experience across IT and enterprise support.'
    },
    {
      title: 'Dedicated Support',
      description: 'End-to-end recruitment partnership and onboarding.'
    }
  ];

}