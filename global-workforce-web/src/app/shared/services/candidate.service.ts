import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private api =
    'https://www.linguahire.com/api/candidates/apply/';

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