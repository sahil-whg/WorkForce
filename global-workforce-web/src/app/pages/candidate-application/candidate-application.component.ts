import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CandidateService } from '../../shared/services/candidate.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidate-application',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './candidate-application.component.html',
  styleUrl: './candidate-application.component.scss'
})
export class CandidateApplicationComponent{

  private fb = inject(FormBuilder);
  private candidateService = inject(CandidateService);
  private toastr = inject(ToastrService);

  selectedFile: File | null = null;
  resumeError = false;
  isSubmitting = false;

  form = this.fb.group({
    full_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/)
      ]
    ],
    languages_known: ['', Validators.required],
    years_of_experience: [0],
    preferred_location: ['', Validators.required],
    current_salary: [0],
    expected_salary: [0]
  });

  get f() {
    return this.form.controls;
  }

  onFileChange(event: Event) {

    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      this.selectedFile = null;
      return;
    }

    const file = input.files[0];

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!allowedTypes.includes(file.type)) {
      this.toastr.error('Only PDF, DOC or DOCX files are allowed.');
      this.selectedFile = null;
      input.value = '';
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      this.toastr.error('Resume size should not exceed 5 MB.');
      this.selectedFile = null;
      input.value = '';
      return;
    }

    this.resumeError = false;
    this.selectedFile = file;
  }

  submit() {

    this.form.markAllAsTouched();

    if (this.form.invalid) {
      this.toastr.warning('Please fill all required fields.');
      return;
    }

    if (!this.selectedFile) {
      this.resumeError = true;
      this.toastr.warning('Please upload your resume.');
      return;
    }

    this.isSubmitting = true;

    const formData = new FormData();

    Object.entries(this.form.value).forEach(([key, value]) => {
      formData.append(key, String(value ?? ''));
    });

    formData.append('resume', this.selectedFile);

    this.candidateService.apply(formData).subscribe({

      next: () => {
        console.log('Application submitted successfully.');
        this.toastr.success(
          'Your application has been submitted successfully.',
          'Success'
        );

        this.form.reset();
        this.selectedFile = null;
        this.resumeError = false;
        this.isSubmitting = false;

        const input = document.querySelector(
          'input[type=file]'
        ) as HTMLInputElement;

        if (input) {
          input.value = '';
        }

      },

      error: () => {

        this.isSubmitting = false;

        this.toastr.error(
          'Something went wrong. Please try again.'
        );

      }

    });

  }

}