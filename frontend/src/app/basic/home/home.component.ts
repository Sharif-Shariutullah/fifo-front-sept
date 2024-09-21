import { jobPosting } from 'src/app/_model/jobPosting.model';
import { JobpostService } from './../../_service/jobpost.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

constructor(private JobPostSer : JobpostService){}

ngOnInit(){
  // this.getAllJobs();
};

//array 
// jobDetails = [];


// public getAllJobs() {

//   this.JobPostSer.getAllJobs().subscribe(
//     (response: jobPosting[]) => {
//       console.log(response);

//       this.jobDetails = response;

//     }, (error: HttpErrorResponse) => { console.log(error); }


//   );
// }


}
