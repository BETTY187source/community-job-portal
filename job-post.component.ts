import { Component } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css'],
})
export class JobPostComponent {
  title = '';
  description = '';
  company = '';
  location = '';
  type = '';

  constructor(private jobService: JobService) {}

  postJob() {
    const jobData = {
      title: this.title,
      description: this.description,
      company: this.company,
      location: this.location,
      type: this.type,
    };

    this.jobService.postJob(jobData).then((response) => {
      alert('Job posted successfully!');
    });
  }
}
