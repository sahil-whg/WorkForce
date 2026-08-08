import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private api =
    'http://localhost:8000/candidates/apply/';

  constructor(
    private http: HttpClient
  ) {}

  apply(
    formData: FormData
  ) {
    return this.http.post(
      this.api,
      formData
    );
  }
}