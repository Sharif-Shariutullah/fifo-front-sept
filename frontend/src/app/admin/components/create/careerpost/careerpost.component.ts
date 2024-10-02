import { CareerlistComponent } from './../../list/careerlist/careerlist.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { jobPosting } from 'src/app/_model/jobPosting.model';
import { JobpostService } from 'src/app/_service/jobpost.service';
import Swal from 'sweetalert2';

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
    
    
    responsibilities: [],
  }

  // injecting the service where i http requests/method are made
  constructor(
    private jobPostSer: JobpostService,
    private router: Router
    ) {  }

  ngOnInit(): void {
    
  }

  trackByIndex(index: number, obj: any): any {
    return index; // or return obj.id if you have a unique identifier
}


  // Method to add a new responsibility field
  addResponsibility() {
    this.jobPost.responsibilities.push('');
  }


 // Method to remove a responsibility by index
  removeResponsibility(index: number) {
    this.jobPost.responsibilities.splice(index, 1);
  }











  // submit button method
  createJob(jobPostingForm: NgForm) {
    // console.log(this.jobPost);

    this.jobPostSer.createJob(this.jobPost).subscribe(
      (response: jobPosting) => {
      


    Swal.fire({
      icon: "success",
      title: "Done",
      text: "Successfully Created    JOB",
      showConfirmButton: false,
      timer: 2500
    });


        // this.getAllJobs();
        this.router.navigate(['/admin/careerList']);
        jobPostingForm.reset();
      },
              (error: HttpErrorResponse) => { 
                
                
                Swal.fire({
                                  icon: 'error',
                                  title: 'Oops...',
                                  text: 'Something went wrong! Please think what is you mistake.'
                                });
                
                console.log(error); }
    );
  }







}
