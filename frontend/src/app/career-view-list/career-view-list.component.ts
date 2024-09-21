import { Component, OnInit } from '@angular/core';
import { jobPosting } from '../_model/jobPosting.model';
import { JobpostService } from '../_service/jobpost.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-career-view-list',
  templateUrl: './career-view-list.component.html',
  styleUrls: ['./career-view-list.component.scss']
})
export class CareerViewListComponent implements OnInit{


  jobPost: jobPosting;

constructor( 
  private jobPostSer: JobpostService,
  private router: Router,
  private activatedRoute : ActivatedRoute
){ }




// jobPost: jobPosting = {

//   jobTitle: "",
//   jobDescription: "",
//   salary: 0,
//   experienceRequired: 0,
//   educationQualification: "",
//   applicationDeadline: "",
//   contactInformation: "9th floor, Janata Tower, Software Technology Park, Dhaka 1215   ||  +88-02-44810012-3 & +880 1927 666 222 ",

// }


ngOnInit(): void {
this.jobPost = this.activatedRoute.snapshot.data['jobPosting'];
console.log(this.jobPost);
  this.getAllJobs();
}





  // data source which is array 
  jobDetails: jobPosting[] = [];

  // table colomn names 
  displayedColumns: string[] = ['ID', 'Job Title', 'Job Description', 'Salary', 'Experience', 'Education', 'Deadline', 'Contact', 'Edit', 'Delete'];


  public getAllJobs() {

    this.jobPostSer.getAllJobs().subscribe(
      (response: jobPosting[]) => {
        console.log(response);

        this.jobDetails = response;

      }, (error: HttpErrorResponse) => { console.log(error); }


    );
  }

}
