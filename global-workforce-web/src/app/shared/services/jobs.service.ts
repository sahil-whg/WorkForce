import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private api = `https://www.linguahire.com/api/jobs/`;

  constructor(
    private http: HttpClient
  ) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.api);
  }
}