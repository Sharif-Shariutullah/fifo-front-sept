import { JobApplicant } from './../_model/JobApplicant.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobApplicantService {
 
  constructor(private httpClient: HttpClient) { }



// create a new Application with PDF upload
public applyForNewJob(formData: FormData) {
  return this.httpClient.post<JobApplicant>('http://localhost:8080/api/applyForNewJob', formData);
}

// get or show all Application
public getAllApplication() {
  return this.httpClient.get<JobApplicant[]>('http://localhost:8080/api/getAllJobApplicant');
}

// Download PDF by applicant ID
public downloadPdf(applicantId: number) {
  return this.httpClient.get(`http://localhost:8080/api/downloadPdf/${applicantId}`, {
    responseType: 'blob'
  });
}








  // -----------------------------------------it works 


  // // create a new Application

  // public applyForNewJob(jobApplicant: JobApplicant) {
  //   return this.httpClient.post<JobApplicant>('http://localhost:8080/api/applyForNewJob', jobApplicant);
  // }



  // // get or show all Application
  // public getAllApplication() {
  //   return this.httpClient.get<JobApplicant[]>('http://localhost:8080/api/getAllJobApplicant');
  // }



}


  // //delete a job
  // public deleteJobPost(id: number) {
  //   return this.httpClient.delete(`http://localhost:8080/api/admin/deleteJobPost/${id}`);
  //   // return this.httpClient.delete("http://localhost:8080/api/admin/deleteJobPost/"+id);


  // }



  // // update a job

  // public getJobPostById(id) {
  //   return this.httpClient.get<jobPosting>(`http://localhost:8080/api//getJobPostById/${id}`);
  //   // return this.httpClient.get<jobPosting>("http://localhost:8080/api//getJobPostById/"+id));
  // }








