import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobPostComponent } from './job-post/job-post.component';

@NgModule({
  declarations: [AppComponent, JobListComponent, JobPostComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
