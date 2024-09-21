import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { globalBpoModel } from 'src/app/_model/globalBpo.model';
import { GlobalBpoService } from 'src/app/_service/globalBpo/global-bpo.service';
import { PracticeService } from 'src/app/Practice/service/practice.service';

@Component({
  selector: 'app-global-bpo-post',
  templateUrl: './global-bpo-post.component.html',
  styleUrls: ['./global-bpo-post.component.scss']
})
export class GlobalBpoPostComponent {

//   // 1. injecting the service where i http requests/method are made

// constructor(
//   private router: Router,
//   private serviceClass: GlobalBpoService) { }


// // 2. creating an object

// Object: globalBpoModel = {

//   title: '',
//   subtitle: '',
//   details: '',

// //date : 
// // bpoImage :
// // bpoVideo :

// };



// // 3. submit button method
// createGlobalBpo(globalBpoForm: NgForm) {
//   this.serviceClass.createGlobalBpo(this.Object).subscribe(
//     (response: globalBpoModel) => {
//       console.log(response);

//       this.router.navigate(['/globalBpoList']);

//       globalBpoForm.reset();
//     }, (error: HttpErrorResponse) => {
//       console.log(error);
//     }
//   )

// }








constructor(
  private fb: FormBuilder,
  private router: Router,
  private snackBar: MatSnackBar,
  private practiceService: PracticeService
) { }



practiceForm: FormGroup;
listOfCategories: any = [];
selectedFile: File | null;
imagePreview: string | ArrayBuffer | null;



onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
  this.previewImage();
}


previewImage() {
  const reader = new FileReader();
  reader.onload = () => {
    this.imagePreview = reader.result;
  };
  reader.readAsDataURL(this.selectedFile);
}


ngOnInit(): void {
  this.practiceForm = this.fb.group({
    // categoryId: [null, [Validators.required]],
    title: [null, [Validators.required]],
    subtitle: [null, [Validators.required]],
    description: [null, [Validators.required]],
  });
  // this.getAllCategories();
}



addPractice(): void {
  if (this.practiceForm.valid) {
    const formData: FormData = new FormData();
    formData.append('img', this.selectedFile);
    // formData.append('categoryId', this.productForm.get('categoryId').value);
    formData.append('title', this.practiceForm.get('title').value);
    formData.append('subtitle', this.practiceForm.get('subtitle').value);
    formData.append('description', this.practiceForm.get('description').value);

    console.log('-----formData-----', formData);


    this.practiceService.addPractice(formData).subscribe((res: any) => {
      const response = res;
      if (response.id != null) {
        this.snackBar.open('practice Posted successfully!', 'Close', {
          duration: 5000
        });
        // this.router.navigateByUrl('/practice-details');
      } else {

        this.snackBar.open(response.message, 'Error', {
          duration: 5000
        });


      }
    })
  } else {
    for (const i in this.practiceForm.controls) {
      this.practiceForm.controls[i].markAsDirty();
      this.practiceForm.controls[i].updateValueAndValidity();
    }
  }
}





}
