import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { jobPosting } from 'src/app/_model/jobPosting.model';
import { JobpostService } from 'src/app/_service/jobpost.service';

@Component({
  selector: 'app-careerlist',
  templateUrl: './careerlist.component.html',
  styleUrls: ['./careerlist.component.scss']
})
export class CareerlistComponent implements OnInit{


  // object 

  jobPost: jobPosting = {

    jobTitle: "",
    jobDescription: "",
    salary: 0,
    experienceRequired: 0,
    educationQualification: "",
    applicationDeadline: "",
    contactInformation: "9th floor, Janata Tower, Software Technology Park, Dhaka 1215   ||  +88-02-44810012-3 & +880 1927 666 222 ",
   
   
    responsibilities: [],
    requirements: [],    
    whatWeOffer: [],

  }

  // injecting the service where i http requests/method are made
  constructor(
    private jobPostSer: JobpostService,
    private router: Router
    ) {  }

  ngOnInit(): void {
    this.getAllJobs();
  }
 



  // submit button method
  // createJob(jobPostingForm: NgForm) {
  //   // console.log(this.jobPost);

  //   this.jobPostSer.createJob(this.jobPost).subscribe(
  //     (response: jobPosting) => {
  //       console.log(response);
  //       jobPostingForm.reset();
  //       this.getAllJobs();
  //     },
  //     (error: HttpErrorResponse) => { console.log(error); }
  //   );
  // }
  



  // data source which is array 
  jobDetails: jobPosting[] = [];

  // table colomn names 
  displayedColumns: string[] = ['#', 'ID', 'Job Title', 'Job Description', 'Salary', 'Experience', 'Education', 'Deadline', 'Contact', 'Responsibility', 'Requirements', 'What We Offer', 'Edit', 'Delete'];


  public getAllJobs() {

    this.jobPostSer.getAllJobs().subscribe(
      (response: jobPosting[]) => {
        console.log(response);

        this.jobDetails = response;

      }, (error: HttpErrorResponse) => { console.log(error); }


    );
  }


  // delete job post by id

  deleteJobPost(id) {
    this.jobPostSer.deleteJobPost(id).subscribe(
      (response) => { 
        console.log(response); 
      this.getAllJobs();
      
      },
      (error: HttpErrorResponse) => { console.log(error); }
    );

    // console.log(id);

  }






// editJobPost
editJobPost(id) {

  this.router.navigate(['/career', {id: id}]);
  console.log(id);



  }




}
