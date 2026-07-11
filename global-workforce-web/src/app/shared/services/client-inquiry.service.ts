import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClientInquiryService {

  private api =
    'https://www.linguahire.com/api/client-inquiries/';

  constructor(
    private http: HttpClient
  ) {}

  submit(data: any) {
    return this.http.post(
      this.api,
      data
    );
  }

}