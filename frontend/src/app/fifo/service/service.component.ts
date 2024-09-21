import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FifoServicesModel } from 'src/app/_model/servicePost.model';
import { ServicePostService } from 'src/app/_service/servicePost/service-post.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  
  
  constructor(
    private router: Router,
    private servicePostSer: ServicePostService
  ) {}

  ngOnInit() {
    this.getAllService();
  }

  //array
  serviceDetails = [];

  public getAllService() {
    this.servicePostSer.getAllFifoServices().subscribe(
      (response: FifoServicesModel[]) => {
        console.log(response);

        this.serviceDetails = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  // details page
  detailsById(id) {
    // this.router.navigate(['/CareerView', {id:id}]);
  }



  
}
