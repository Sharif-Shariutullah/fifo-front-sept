import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { photoUploadModel } from 'src/app/_model/photoUpload.model';
import { PhotoUploadService } from 'src/app/_service/photoUpload/photo-upload.service';

@Component({
  selector: 'app-gallerylist',
  templateUrl: './gallerylist.component.html',
  styleUrls: ['./gallerylist.component.scss']
})
export class GallerylistComponent implements OnInit {


  // 1. injecting the service where i http requests/method are made

  constructor(
    private router: Router,
    private service: PhotoUploadService) { }


  // 2. creating an object

  Object: photoUploadModel = {

    galleryName: '',
    galleryDetails: '',

    // galleryImage:
  };

  ngOnInit(): void {
    this.getAllGallery();
  }



  // data source which is array 
  listArray: photoUploadModel[] = [];

  // table colomn names 
  displayedColumns: string[] = ['ID', 'Photo Name', 'Description', 'Edit', 'Delete'];


  // 3. method button method

  public getAllGallery() {

    this.service.getAllGallery().subscribe(
      (response: photoUploadModel[]) => {
        console.log(response);

        this.listArray = response;
      }, (error: HttpErrorResponse) => { console.log(error); }
    );
  };



  // delete news
  delete(id) {
    this.service.deleteGallery(id).subscribe(
      (response) => {
        console.log(response);
        this.getAllGallery();
      },
      (error: HttpErrorResponse) => { console.log(error); }
    )


  }



  // edit news
  edit(id) {

  }



}
