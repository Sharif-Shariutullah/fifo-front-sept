import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { globalBpoModel } from 'src/app/_model/globalBpo.model';
import { GlobalBpoService } from 'src/app/_service/globalBpo/global-bpo.service';
import { PracticeService } from 'src/app/Practice/service/practice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-global-bpo-post',
  templateUrl: './global-bpo-post.component.html',
  styleUrls: ['./global-bpo-post.component.scss']
})
export class GlobalBpoPostComponent {
  constructor(
    private bpoService: GlobalBpoService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.imageFormArray = this.fb.array([]);
    this.postForm = this.fb.group({
      title: [''],
      subtitle: [''],
      postDate: [''],
      details: [''],
      images: this.imageFormArray, // Handle multiple images with captions
    });
  }

  postForm: FormGroup;
  imageFormArray: FormArray;
  selectedFiles: File[] = [];
  imagePreviews: string[] = []; // For storing image previews

  // Add image group
  addImage() {
    const imageGroup = this.fb.group({
      caption: [''],
      previewUrl: [''] // Store preview URL here
    });
    this.imageFormArray.push(imageGroup); // Add new image and caption field
  }

  // File selection with preview (called on file input or drop)
  handleFileSelection(file: File, index: number) {
    this.selectedFiles[index] = file;

    // Generate image preview
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageFormArray.at(index).patchValue({
        previewUrl: e.target.result // Update preview URL
      });
    };
    reader.readAsDataURL(file); // Read the image file
  }

  // Handle file input change event
  onFileSelected(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      this.handleFileSelection(file, index);
    }
  }

  // Handle drag-and-drop event
  onFileDrop(event: any, index: number) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      this.handleFileSelection(file, index);
    }
  }

  // Prevent default behavior on drag over to allow dropping
  onDragOver(event: any) {
    event.preventDefault();
  }

  // Remove image and caption
  removeImage(index: number) {
    this.imageFormArray.removeAt(index); // Remove from form
    this.selectedFiles.splice(index, 1); // Remove from selected files
  }

  // Submit form data
  submitPost() {
    const formData = new FormData();
    
    // Append form data fields
    formData.append('title', this.postForm.get('title').value);
    formData.append('subtitle', this.postForm.get('subtitle').value);
    formData.append('postDate', this.postForm.get('postDate').value);
    formData.append('details', this.postForm.get('details').value);
    
    // Captions array
    const captions = this.imageFormArray.value.map((image) => image.caption);
    
    // Append captions
    captions.forEach((caption, index) => {
        console.log(`Appending caption ${index + 1}:`, caption); // Debugging caption
        formData.append(`captions`, caption);
    });

    // Append images
    this.selectedFiles.forEach((file, index) => {
        console.log(`Appending image ${index + 1}:`, file.name); // Debugging file name
        formData.append('images', file);
    });

    // Check the final formData keys and values (for debugging)
    formData.forEach((value, key) => {
        console.log(`Key: ${key}, Value:`, value);
    });

    // Send data to the backend
    this.http.post('http://localhost:8080/api/admin/createGlobalBPO', formData)
      .subscribe(
        (response) => {
          console.log('Post created successfully:', response);

          Swal.fire({
            icon: 'success',
            title: 'Done',
            text: 'GlobalBPO Created Successfully',
            showConfirmButton: false,
            timer: 2500,
          });

          this.router.navigateByUrl('globalBpoList');
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please try again later.',
          });

          console.error('Error uploading GlobalBPO:', error);
        }
      );
}

}











// ## it works with but i add more & more
// export class GlobalBpoPostComponent {
//   constructor(
//     private bpoService: GlobalBpoService,
//     private fb: FormBuilder,
//     private http: HttpClient,
//     private router: Router
//   ) {
//     this.imageFormArray = this.fb.array([]);
//     this.postForm = this.fb.group({
//       title: [''],
//       subtitle: [''],
//       postDate: [''],
//       details: [''],
//       images: this.imageFormArray, // Handle multiple images with captions
//     });
//   }

//   postForm: FormGroup;
//   imageFormArray: FormArray;
//   selectedFiles: File[] = [];
//   imagePreviews: string[] = []; // For storing image previews

//   // Add image group
//   addImage() {
//     const imageGroup = this.fb.group({
//       caption: [''],
//       previewUrl: [''] // Store preview URL here
//     });
//     this.imageFormArray.push(imageGroup); // Add new image and caption field
//   }

//   // File selection with preview
//   onFileSelected(event: any, index: number) {
//     const file = event.target.files[0];
//     this.selectedFiles[index] = file;

//     // Generate image preview
//     const reader = new FileReader();
//     reader.onload = (e: any) => {
//       this.imageFormArray.at(index).patchValue({
//         previewUrl: e.target.result // Update preview URL
//       });
//     };
//     reader.readAsDataURL(file); // Read the image file
//   }

//   // Remove image and caption
//   removeImage(index: number) {
//     this.imageFormArray.removeAt(index); // Remove from form
//     this.selectedFiles.splice(index, 1); // Remove from selected files
//   }

//   // Submit form data
//   submitPost() {
//     const formData = new FormData();
//     formData.append('title', this.postForm.get('title').value);
//     formData.append('subtitle', this.postForm.get('subtitle').value);
//     formData.append('postDate', this.postForm.get('postDate').value);
//     formData.append('details', this.postForm.get('details').value);

//     const captions = this.imageFormArray.value.map((image) => image.caption);
//     captions.forEach((caption) => formData.append('captions', caption)); // Add captions

//     this.selectedFiles.forEach((file) => formData.append('images', file)); // Add images

//     this.http.post('http://localhost:8080/api/admin/createGlobalBPO', formData).subscribe(
//       (response) => {
//         console.log('Post created successfully:', response);

//         Swal.fire({
//           icon: 'success',
//           title: 'Done',
//           text: 'GlobalBPO Created Successfully',
//           showConfirmButton: false,
//           timer: 2500,
//         });

//         this.router.navigateByUrl('globalBpoList');
//       },
//       (error) => {
//         Swal.fire({
//           icon: 'error',
//           title: 'Oops...',
//           text: 'Something went wrong! Please try again later.',
//         });

//         console.error('Error uploading GlobalBPO:', error);
//       }
//     );
//   }
// }










// ## it works with but i add more 


// export class GlobalBpoPostComponent {


//   constructor(
//     private bpoService: GlobalBpoService,
//     private fb: FormBuilder, 
//     private http: HttpClient,
//     private router: Router
//   ) {
//     this.imageFormArray = this.fb.array([]);
//     this.postForm = this.fb.group({
//       title: [''],
//       subtitle: [''],
//       postDate: [''],
//       details: [''],
//       images: this.imageFormArray  // Handle multiple images with captions
//     });
//   }


//   postForm: FormGroup;
//   imageFormArray: FormArray;
//   selectedFiles: File[] = [];

  
//   addImage() {
//     const imageGroup = this.fb.group({
//       caption: ['']
//     });
//     this.imageFormArray.push(imageGroup);  // Add new image and caption field
//   }

//   onFileSelected(event: any, index: number) {
//     this.selectedFiles[index] = event.target.files[0];
//   }

//   submitPost() {
//     const formData = new FormData();
//     formData.append('title', this.postForm.get('title').value);
//     formData.append('subtitle', this.postForm.get('subtitle').value);
//     formData.append('postDate', this.postForm.get('postDate').value);
//     formData.append('details', this.postForm.get('details').value);

//     const captions = this.imageFormArray.value.map(image => image.caption);
//     captions.forEach(caption => formData.append('captions', caption));  // Add captions

//     this.selectedFiles.forEach(file => formData.append('images', file));  // Add images

//     this.http.post('http://localhost:8080/api/admin/createGlobalBPO', formData).subscribe(response => {
//       console.log('Post created successfully:', response);


//       Swal.fire({
//                   icon: 'success',
//                   title: 'Done',
//                   text: 'GlobalBPO Created Successfully',
//                   showConfirmButton: false,
//                   timer: 2500
//                 });
          
//                 this.router.navigateByUrl('globalBpoList');
  

//     }, (error) => {

//               Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'Something went wrong! Please try again later.',
//               });
        
//               console.error('Error uploading GlobalBPO:', error);
//             }
  
  
  
  
  
  
//   )
    
    
    
//     ;
//   }

  

// }





















// previous workable method

// //   // 1. injecting the service where i http requests/method are made

// // constructor(
// //   private router: Router,
// //   private serviceClass: GlobalBpoService) { }


// // // 2. creating an object

// // Object: globalBpoModel = {

// //   title: '',
// //   subtitle: '',
// //   details: '',

// // //date : 
// // // bpoImage :
// // // bpoVideo :

// // };



// // // 3. submit button method
// // createGlobalBpo(globalBpoForm: NgForm) {
// //   this.serviceClass.createGlobalBpo(this.Object).subscribe(
// //     (response: globalBpoModel) => {
// //       console.log(response);

// //       this.router.navigate(['/globalBpoList']);

// //       globalBpoForm.reset();
// //     }, (error: HttpErrorResponse) => {
// //       console.log(error);
// //     }
// //   )

// // }


// submit method----not works------version 1.0





// selectedFiles: File[] = [];

//   onFileSelected(event: any) {
//     this.selectedFiles = event.target.files;
//   }

//   submitGlobalBPOForm(bpoForm: NgForm) {
//     const formData = new FormData();
    
//     formData.append('title', bpoForm.value.title);
//     formData.append('subtitle', bpoForm.value.subtitle);
//     formData.append('postDate', bpoForm.value.postDate);
//     formData.append('details', bpoForm.value.details);
  
//     if (this.selectedFiles && this.selectedFiles.length > 0) {

//       for (let i = 0; i < this.selectedFiles.length; i++) {
//         formData.append('images', this.selectedFiles[i]);
//       }

//     }
  
//     if (Array.isArray(bpoForm.value.captions)) {

//       bpoForm.value.captions.forEach((caption: string, index: number) => {
//         formData.append(`captions[${index}]`, caption);
//       });
    
//     } else if (bpoForm.value.captions) {
//       formData.append('captions', bpoForm.value.captions);
//     }
  
//     this.bpoService.createGlobalBPO(formData).subscribe(
      
//       {
//       next: (response) => {
     


//         Swal.fire({
//           icon: 'success',
//           title: 'Done',
//           text: 'GlobalBPO Created Successfully',
//           showConfirmButton: false,
//           timer: 2500
//         });
  
//         console.log('BPO Created', response);
//         bpoForm.resetForm(); 

//       },
//       error: (error) => {

//         Swal.fire({
//           icon: 'error',
//           title: 'Oops...',
//           text: 'Something went wrong! Please try again later.',
//         });
  
//         console.error('Error uploading GlobalBPO:', error);
//         console.log('Error Details:', error.message, error.error, error.status);
      
//       }
//     });
//   }
  






// submit method----not works------version 1.2












// constructor(
//   private fb: FormBuilder,
//   private router: Router,
//   private snackBar: MatSnackBar,
//   private practiceService: PracticeService
// ) { }



// practiceForm: FormGroup;
// listOfCategories: any = [];
// selectedFile: File | null;
// imagePreview: string | ArrayBuffer | null;



// onFileSelected(event: any) {
//   this.selectedFile = event.target.files[0];
//   this.previewImage();
// }


// previewImage() {
//   const reader = new FileReader();
//   reader.onload = () => {
//     this.imagePreview = reader.result;
//   };
//   reader.readAsDataURL(this.selectedFile);
// }


// ngOnInit(): void {
//   this.practiceForm = this.fb.group({
//     // categoryId: [null, [Validators.required]],
//     title: [null, [Validators.required]],
//     subtitle: [null, [Validators.required]],
//     description: [null, [Validators.required]],
//   });
//   // this.getAllCategories();
// }



// addPractice(): void {
//   if (this.practiceForm.valid) {
//     const formData: FormData = new FormData();
//     formData.append('img', this.selectedFile);
//     // formData.append('categoryId', this.productForm.get('categoryId').value);
//     formData.append('title', this.practiceForm.get('title').value);
//     formData.append('subtitle', this.practiceForm.get('subtitle').value);
//     formData.append('description', this.practiceForm.get('description').value);

//     console.log('-----formData-----', formData);


//     this.practiceService.addPractice(formData).subscribe((res: any) => {
//       const response = res;
//       if (response.id != null) {
//         this.snackBar.open('practice Posted successfully!', 'Close', {
//           duration: 5000
//         });
//         // this.router.navigateByUrl('/practice-details');
//       } else {

//         this.snackBar.open(response.message, 'Error', {
//           duration: 5000
//         });


//       }
//     })
//   } else {
//     for (const i in this.practiceForm.controls) {
//       this.practiceForm.controls[i].markAsDirty();
//       this.practiceForm.controls[i].updateValueAndValidity();
//     }
//   }
// }








