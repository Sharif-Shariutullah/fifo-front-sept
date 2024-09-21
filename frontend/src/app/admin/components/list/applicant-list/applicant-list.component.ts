import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobApplicant } from 'src/app/_model/JobApplicant.model';
import { JobApplicantService } from 'src/app/_service/job-applicant.service';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.scss']
})
export class ApplicantListComponent implements OnInit{


  // object 

  // jobPost: jobPosting = {
  jobApp: JobApplicant = {

    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    applicationDate: "এটা বের করতে হবে",
    
  }

  // injecting the service where  http requests/methods are made
  constructor(
    private jobAppServ: JobApplicantService,
    private router: Router
    ) {  }

  ngOnInit(): void {
   this.getAllApplication(); 
  }


  // data source which is array 
  // jobDetails: jobPosting[] = [];
  applicationDetails: JobApplicant[] = [];
  

  // table colomn names 
  displayedColumns: string[] = ['ID', 'Name', 'Email', 'Phone', 'Date Of Birth', 'Application Date', 'Edit', 'Delete'];


  public getAllApplication() {

    this.jobAppServ.getAllApplication().subscribe(
      (response: JobApplicant[]) => {
        console.log(response);

        this.applicationDetails = response;

      }, (error: HttpErrorResponse) => { console.log(error); }


    );
  }




}


