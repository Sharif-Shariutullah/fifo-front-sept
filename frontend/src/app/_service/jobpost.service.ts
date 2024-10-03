import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jobPosting } from '../_model/jobPosting.model';

@Injectable({
  providedIn: 'root',
})
export class JobpostService {

  
  constructor(private httpClient: HttpClient) {}

  // create 
  public createJob(jobPost: jobPosting) {
    return this.httpClient.post<jobPosting>(
      'http://localhost:8080/api/admin/postNewJob',
      jobPost
    );
  }

  // get/show 
  public getAllJobs() {
    return this.httpClient.get<jobPosting[]>(
      'http://localhost:8080/api/admin/getAllJobPosts'
    );
  }

  //delete 
  public deleteJobPost(id: number) {
    return this.httpClient.delete(
      `http://localhost:8080/api/admin/deleteJobPost/${id}`
    );
    // return this.httpClient.delete("http://localhost:8080/api/admin/deleteJobPost/"+id);
  }

 


  
  // edit 
  public getJobPostById(id : number) {
    return this.httpClient.get<jobPosting>(
      `http://localhost:8080/api/admin/getJobPostById/${id}`
    );
    // return this.httpClient.get<jobPosting>("http://localhost:8080/api/getJobPostById/"+id));
  }
}
