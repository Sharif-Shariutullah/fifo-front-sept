import { getLocaleDateFormat } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobApplicant } from 'src/app/_model/JobApplicant.model';
import { jobPosting } from 'src/app/_model/jobPosting.model';
import { JobApplicantService } from 'src/app/_service/job-applicant.service';
import { JobpostService } from 'src/app/_service/jobpost.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit{



  // injecting the service where i http requests/method are made
 
  jobDetailsWithData: jobPosting; // a single object, not an array
 
 
  constructor(private route: ActivatedRoute, private JobPostSer: JobpostService) { }


  ngOnInit(){
     // Get the job ID from the route
     const jobId = this.route.snapshot.paramMap.get('id');
    
     // Fetch job details by ID
     this.JobPostSer.getJobPostById(jobId).subscribe(
       (response: jobPosting) => {
         this.jobDetailsWithData = response;
       },
       (error: HttpErrorResponse) => {
         console.error('Error loading job details:', error);
       }
     );
    
  }




  // object 

  // jobPost: jobPosting = {
  // jobApp: JobApplicant = {

  //   // firstName: "",
  //   // lastName: "",
  //   // email: "",
  //   // phone: "",
  //   // dateOfBirth: "",
  //   // applicationDate: "এটা বের করতে হবে",
    
  // }


  // submit button method
  // applyForNewJob(newApplicantForm: NgForm) {


  //   this.jobAppServ.applyForNewJob(this.jobApp).subscribe(
  //     (response: JobApplicant) => {
  //       console.log(response);
      
  //       // this.jobAppServ.getAllApplication();
  //       // this.router.navigate(['/ApplicantList']);

  //       // newApplicantForm.reset();
  //       // this.router.navigate(['/applicationForm']);
  //       newApplicantForm.reset();

  //     },
  //             (error: HttpErrorResponse) => { console.log(error); }
  //   );

  //   console.log(this.jobApp);


  // }







}
