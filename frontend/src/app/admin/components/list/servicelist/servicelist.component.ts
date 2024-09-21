import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FifoServicesModel } from 'src/app/_model/servicePost.model';
import { ServicePostService } from 'src/app/_service/servicePost/service-post.service';

@Component({
  selector: 'app-servicelist',
  templateUrl: './servicelist.component.html',
  styleUrls: ['./servicelist.component.scss']
})
export class ServicelistComponent implements OnInit {

  // 1. injecting the service where i http requests/method are made


  constructor(
    private router: Router,
    private service: ServicePostService) {

  };

  // 2. creating an object

  serviceModel: FifoServicesModel = {

    serviceName: '',
    serviceDetails: '',

    // serviceImage:

  };


  ngOnInit(): void {
    this.getAllFifoServices();
  }



  // data source which is array 
  listArray: FifoServicesModel[] = [];

  // table colomn names 
  displayedColumns: string[] = ['ID', 'Service Name', 'Description', 'Edit', 'Delete'];


  // 3. method button method

  public getAllFifoServices() {

    this.service.getAllFifoServices().subscribe(
      (response: FifoServicesModel[]) => {
        console.log(response);

        this.listArray = response;
      }, (error: HttpErrorResponse) => { console.log(error); }
    );
  };



  // delete news
  delete(id) {
    this.service.deleteFifoServices(id).subscribe(
      (response) => {
        console.log(response);
        this.getAllFifoServices();
      },
      (error: HttpErrorResponse) => { console.log(error); }
    )


  }



  // edit news
  edit(id) {

  }

}
