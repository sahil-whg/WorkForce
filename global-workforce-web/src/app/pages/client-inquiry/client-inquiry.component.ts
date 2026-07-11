import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientInquiryService } from '../../shared/services/client-inquiry.service';

@Component({
  selector: 'app-client-inquiry',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './client-inquiry.component.html',
  styleUrl: './client-inquiry.component.scss'
})
export class ClientInquiryComponent {

  private fb = inject(FormBuilder);
  private inquiryService = inject(ClientInquiryService);

  loading = false;
  submitted = false;

  form = this.fb.group({
    company_name: ['', Validators.required],
    hiring_requirement: ['', Validators.required],
    language_needed: ['', Validators.required],
    job_role: ['', Validators.required],
    hiring_volume: [1, Validators.required],
    work_location: ['', Validators.required],
    budget_range: ['', Validators.required]
  });

  submit() {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.inquiryService
      .submit(this.form.value)
      .subscribe({
        next: () => {
          this.loading = false;
          this.submitted = true;
          this.form.reset();
        },
        error: (err) => {
          this.loading = false;
          console.error(err);
        }
      });
  }

}