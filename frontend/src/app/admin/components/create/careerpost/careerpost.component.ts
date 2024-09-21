import { CareerlistComponent } from './../../list/careerlist/careerlist.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { jobPosting } from 'src/app/_model/jobPosting.model';
import { JobpostService } from 'src/app/_service/jobpost.service';

@Component({
  selector: 'app-careerpost',
  templateUrl: './careerpost.component.html',
  styleUrls: ['./careerpost.component.scss']
})
export class CareerpostComponent implements OnInit{


  // object 

  jobPost: jobPosting = {

    jobTitle: "",
    jobDescription: "",
    salary: 0,
    experienceRequired: 0,
    educationQualification: "",
    applicationDeadline: "",
    contactInformation: "9th floor, Janata Tower, Software Technology Park, Dhaka 1215   ||  +88-02-44810012-3 & +880 1927 666 222 ",

  }

  // injecting the service where i http requests/method are made
  constructor(
    private jobPostSer: JobpostService,
    private router: Router
    ) {  }

  ngOnInit(): void {
    
  }




  // submit button method
  createJob(jobPostingForm: NgForm) {
    // console.log(this.jobPost);

    this.jobPostSer.createJob(this.jobPost).subscribe(
      (response: jobPosting) => {
        
      
        // this.getAllJobs();
        this.router.navigate(['/admin/careerList']);
        jobPostingForm.reset();
      },
              (error: HttpErrorResponse) => { console.log(error); }
    );
  }







}
