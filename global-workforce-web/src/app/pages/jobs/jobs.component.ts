import {
  Component,
  OnInit
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import { JobsService }
from '../../shared/services/jobs.service';

import { Job }
from '../../shared/models/job.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent
implements OnInit {

  jobs: Job[] = [];

  constructor(
    private jobsService:
    JobsService
  ) {}

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.jobsService
      .getJobs()
      .subscribe({
        next: (response) => {
          this.jobs = response;
        },
        error: console.error
      });
  }
}