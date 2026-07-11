import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  services = [
    'Multilingual Staffing',
    'Contract Staffing',
    'Permanent Recruitment',
    'IT Staffing',
    'Customer Support Staffing',
    'Remote Workforce Solutions'
  ];

  industries = [
    'IT Services',
    'BPO & Contact Centers',
    'Technology',
    'Enterprise Support',
    'Healthcare',
    'Financial Services'
  ];

}
