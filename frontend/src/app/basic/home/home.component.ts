import { jobPosting } from 'src/app/_model/jobPosting.model';
import { JobpostService } from './../../_service/jobpost.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



// picture animation 

images: string[] = [
  'assets/photo/offer/call.png',
  'assets/photo/offer/call-2.png',
  'assets/photo/offer/call-3.png',
  'assets/photo/offer/call-4.png',
  'assets/photo/offer/call-5.png',
  // 'assets/photo/offer/call-6.png',
  'assets/photo/offer/call-7.png',
];
currentImage: string = this.images[0];
i: number = 0;

constructor() {}

ngOnInit(): void {
  this.slider();
  this.initializeTypedText();
}

slider(): void {
  setInterval(() => {
    this.i = (this.i + 1) % this.images.length;
    this.currentImage = this.images[this.i];
  }, 3000);
}




// text animation 



initializeTypedText(): void {
const options = {
  strings: [
    'Call Center Services',
    'Digital Marketing ', 
    'Skills Development ', 
    'Creative Design ', 
    'Back-Office Services', 
    'Software Development', 
    
  ],
  typeSpeed: 60,
  backSpeed: 20,
  loop: true
};
const typed = new Typed('#typed-text', options);
}



































// constructor(private JobPostSer : JobpostService){}


// ngOnInit(){
//   // this.getAllJobs();
// };


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
