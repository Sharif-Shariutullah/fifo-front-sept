import { NgForm } from '@angular/forms';
import { jobPosting } from './../_model/jobPosting.model';
import { Component, OnInit } from '@angular/core';
import { JobpostService } from '../_service/jobpost.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor(private JobPostSer: JobpostService, 
    private router: Router,
  ) { }

  ngOnInit() {
    this.getAllJobs();
  };

  //array 
  jobDetails = [];


  public getAllJobs() {

    this.JobPostSer.getAllJobs().subscribe(
      (response: jobPosting[]) => {
        console.log(response);

        this.jobDetails = response;

      }, (error: HttpErrorResponse) => { console.log(error); }


    );
  }

  
  // details page
  CareerView(id){
this.router.navigate(['/CareerView', {id:id}]);

  }


}
    