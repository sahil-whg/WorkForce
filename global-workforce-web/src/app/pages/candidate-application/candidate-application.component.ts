import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators
} from '@angular/forms';

import { CandidateService }
from '../../shared/services/candidate.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-candidate-application',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl:
    './candidate-application.component.html'
})
export class CandidateApplicationComponent {

  selectedFile!: File;
  private fb = inject(FormBuilder);
  private candidateService = inject(CandidateService);

  form = this.fb.group({
    full_name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    languages_known: [''],
    years_of_experience: [0],
    preferred_location: [''],
    current_salary: [0],
    expected_salary: [0]
  });

  // constructor(
  //   private fb: FormBuilder,
  //   private candidateService:
  //   CandidateService
  // ) {}

  onFileChange(
    event: any
  ) {
    this.selectedFile =
      event.target.files[0];
  }

  submit() {

    const formData =
      new FormData();

    Object.entries(
      this.form.value
    ).forEach(
      ([key, value]) => {
        formData.append(
          key,
          String(value ?? '')
        );
      }
    );

    formData.append(
      'resume',
      this.selectedFile
    );

    this.candidateService
      .apply(formData)
      .subscribe({
        next: () => {
          alert(
            'Application submitted.'
          );

          this.form.reset();
        },
        error: console.error
      });
  }
}