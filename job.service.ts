import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl = 'http://localhost:5000/api/jobs';

  constructor() {}

  getJobs() {
    return axios.get(this.apiUrl);
  }

  postJob(jobData: any) {
    return axios.post(this.apiUrl, jobData);
  }
}
