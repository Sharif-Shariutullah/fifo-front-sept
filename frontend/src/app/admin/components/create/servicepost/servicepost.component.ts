import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FifoServicesModel } from 'src/app/_model/servicePost.model';
import { ServicePostService } from 'src/app/_service/servicePost/service-post.service';

@Component({
  selector: 'app-servicepost',
  templateUrl: './servicepost.component.html',
  styleUrls: ['./servicepost.component.scss']
})
export class ServicepostComponent {

  
  // 1. injecting the service where http requests/method are made

  constructor(
    private router: Router,
    private servicePostSer: ServicePostService) { }


  // 2. creating an object

 serviceModel: FifoServicesModel = {

  serviceName: '',
  serviceDetails: '',

    // serviceImage:

  };



  // 3. submit button method
  createService(servicePostForm: NgForm) {
    this.servicePostSer.createFifoService(this.serviceModel).subscribe(
      (response: FifoServicesModel) => {
        console.log(response);

        this.router.navigate(['/serviceList']);
        
        servicePostForm.reset();
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }
    )

  }



}
