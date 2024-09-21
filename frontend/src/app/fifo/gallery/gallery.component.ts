import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FileEntity } from 'src/app/_model/FileEntity.model';
import { photoUploadModel } from 'src/app/_model/photoUpload.model';
import { FileUploadService } from 'src/app/_service/file-upload.service';
import { PhotoUploadService } from 'src/app/_service/photoUpload/photo-upload.service';
import { PracticeService } from 'src/app/Practice/service/practice.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent{
 
  
  // constructor(
  //   private router: Router,
  //   private serviceClass: PhotoUploadService) { }


  // ngOnInit() {
  //   this.getAllGallery();
  // }


  
  // //array
  // galleryDetails = [];

  // public getAllGallery() {
  //   this.serviceClass.getAllGallery().subscribe(
  //     (response: photoUploadModel[]) => {
  //       console.log(response);

  //       this.galleryDetails = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // // details page
  // detailsById(id) {
  //   // this.router.navigate(['/CareerView', {id:id}]);
  // }





 // newly added--------------





 


  practice: any[] = [];

  searchProductForm!: FormGroup;

  constructor(
    private practiceService: PracticeService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getAllPractice();
    this.searchProductForm = this.fb.group({
      title: [null, [Validators.required]]

    })
  }


  getAllPractice() {
    this.practice = [];
    this.practiceService.getAllPractice().subscribe(res => {
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.practice.push(element);

        // console.log( this.products);  25.08.24 (sunday update)
        
      });
    })
  }




  // // serach kaj korche na
  



  // submitForm() {
  //   this.products = [];
  //   const title = this.searchProductForm.get('title')!.value;
  //   // console.log(title,'-----title-----'); 25.08.24 (sunday update)
    
  //   this.adminService.getAllProductsByName(title).subscribe(res => {
  //     res.forEach(element => {
  //       element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
  //       this.products.push(element);
  //     });

  //     // console.log(this.products); 25.08.24 (sunday update)


  //   })
  // }




  // deletePractice(id: any) {
  //   this.practiceService.deletePractice(id).subscribe(res => {
  //     if (res == null) {
  //  this.snackBar.open('practice Deleted Successfully!', 'close', {
  //       duration: 5000
  //     });
  //     this.getAllPractice();
  //     } else {
  //       this.snackBar.open(res.message, 'close', {
  //         duration: 5000,
  //         panelClass: 'error-snackbar'
  //       });
  //     }
  //     })
  // }













}

























// file: FileEntity | undefined;

// constructor(
//   private route: ActivatedRoute,
//   private fileService: FileUploadService
// ) { }



// // ngOnInit(): void {
// //   const id = +this.route.snapshot.paramMap.get('id')!;
// //   this.getFileDetails(id);
// // }


// ngOnInit(): void {
//   const id = +this.route.snapshot.paramMap.get('id')!;  // Check if this value is correct
//   if (id && id > 0) {  // Ensure the id is valid
//     this.getFileDetails(id);
//   } else {
//     console.error('Invalid ID');
//   }
// }









// // Method to get file details by ID
// getFileDetails(id: number): void {
//   this.fileService.getFileDetails(id).subscribe(
//     (response: FileEntity) => {
//       this.file = response;
//     },
//     (error) => {
//       console.error('Error fetching file details', error);
//     }
//   );
// }
