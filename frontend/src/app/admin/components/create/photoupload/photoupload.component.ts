import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { photoUploadModel } from 'src/app/_model/photoUpload.model';
import { PhotoUploadService } from 'src/app/_service/photoUpload/photo-upload.service';

@Component({
  selector: 'app-photoupload',
  templateUrl: './photoupload.component.html',
  styleUrls: ['./photoupload.component.scss']
})
export class PhotouploadComponent {

  // 1. injecting the service where i http requests/method are made

  constructor(
    private router: Router,
    private serviceClass: PhotoUploadService) { }


  // 2. creating an object

  Object: photoUploadModel = {

    galleryName: '',
    galleryDetails: '',

    // galleryImage:

  };


  // 3. submit button method
  createGallery(galleryForm: NgForm) {
    this.serviceClass.createGallery(this.Object).subscribe(
      (response: photoUploadModel) => {
        console.log(response);

        this.router.navigate(['/galleryList']);

        galleryForm.reset();
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }
    )

  }

} 
