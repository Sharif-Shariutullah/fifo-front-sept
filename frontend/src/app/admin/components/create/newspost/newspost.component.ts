import { SafeUrl } from '@angular/platform-browser';
import { getLocaleDateFormat, getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsPostService } from 'src/app/_service/NewsPost/news-post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newspost', 
  templateUrl: './newspost.component.html',
  styleUrls: ['./newspost.component.scss'],
})
export class NewspostComponent implements OnInit{


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private newsService: NewsPostService,
  ) { }





  newsForm!: FormGroup;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;








  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }





  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    if (this.selectedFile) {
      reader.readAsDataURL(this.selectedFile);
    }
  }






  
  ngOnInit(): void {
    this.newsForm = this.fb.group({


      title: ['', [Validators.required]],
      subtitle: ['', [Validators.required]],
      description: this.fb.array([this.fb.control('', Validators.required)])
    
    });
  }





  get descriptionArray() {
    return (this.newsForm.get('description') as FormArray);
  }

  addDescription() {
    this.descriptionArray.push(this.fb.control('', Validators.required));
  }


  removeDescription(index: number) {
    if (this.descriptionArray.length > 1) {
      this.descriptionArray.removeAt(index);
    } else {
      alert("You must have at least one description.");
    }
  }




  trackByIndex(index: number, obj: any): any {
    return index; 
}










addNews(): void {
  if (this.newsForm.valid) {
    const formData: FormData = new FormData();
    formData.append('img', this.selectedFile); // Add image to the form data
    formData.append('title', this.newsForm.get('title').value);
    formData.append('subtitle', this.newsForm.get('subtitle').value);
    // formData.append('description', JSON.stringify(this.descriptionArray.value)); // Send the array of descriptions
    formData.append('description', this.descriptionArray.value.join(' ')); 

    this.newsService.addNews(formData).subscribe(
      (res: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Done',
          text: 'News Created Successfully',
          showConfirmButton: false,
          timer: 2500
        });

      
          this.newsForm.reset(); 
          this.selectedFile = null;  

      },
      (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    );
  } else {
    this.newsForm.markAllAsTouched();
  }
}


}




























  // 1. injecting the service where i http requests/method are made

  // constructor(
  //   private router: Router,
  //   private newsService: NewsPostService,
  //   private sanitizer: DomSanitizer
  // ) {}

  // // 2. creating an object

  // newsObject: newsPostModel = {
  //   title: '',
  //   content: '',
  //   imageUrl: '',
  //   videoUrl: '',
  //   author: '',
  //   publishedAt: '',
  //   newsImages: [],
  // };

  // // 3. submit button method
  // createNews(newPostForm: NgForm) {
  //   console.log(this.newsObject);

  //   const newsFormData = this.prepareFormData2(this.newsObject);

  //   this.newsService.createNews(newsFormData).subscribe(
  //     (response: newsPostModel) => {
  //       console.log(response);

  //       this.router.navigate(['/newsList']);

  //       newPostForm.reset();
  //       this.selectedFiles = [];
  //       this.imagePreviews = [];
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // // convert from data into object
  // prepareFormData(newsObject: newsPostModel): FormData {
  //   const formData = new FormData();

  //   formData.append(
  //     'newsObject',
  //     new Blob([JSON.stringify(newsObject)], { type: 'application/json' })
  //   );

  //   for (var i = 0; i < newsObject.newsImages.length; i++) {
  //     formData.append(
  //       'imageFile',
  //       newsObject.newsImages[i].file,
  //       newsObject.newsImages[i].file.name
  //     );
  //   }
  //   return formData;
  // }

  // prepareFormData2(newsObject: newsPostModel): FormData {
  //   const formData = new FormData();

  //   console.log('------------------bc-------------------');

  //   for (var i = 0; i < this.selectedFiles.length; i++) {
  //     formData.append('image', this.selectedFiles[i]);
  //   }

  //   formData.append('title', newsObject.title);
  //   formData.append('content', newsObject.content);
  //   formData.append('author', newsObject.author);
  //   console.log(newsObject.publishedAt);

  //   formData.append('publishedAt', '2024-09-03T14:30:00');

  //   return formData;
  // }

  // selectedFiles: File[] | null;
  // imagePreviews: string[] | null;

  // onFileSelected3(event: any) {
  //   // Clear previous files and previews
  //   this.selectedFiles = [];
  //   this.imagePreviews = [];
  //   const files = event.target.files;
  //   for (let i = 0; i < files.length; i++) {
  //     this.selectedFiles.push(files[i]);
  //     const file = event.target.files[i];

  //     const fileHandle: FileHandle = {
  //       file: file,
  //       url: this.sanitizer.bypassSecurityTrustUrl(
  //         window.URL.createObjectURL(file)
  //       ),
  //     };
  //     this.newsObject.newsImages.push(fileHandle);
  //   }
  //   console.log(this.selectedFiles);

  //   this.previewImages();

  //   console.log(this.selectedFiles);
  // }

  // previewImages() {
  //   // Clear previous previews//-
  //   this.imagePreviews = [];
  //   this.selectedFiles.forEach((file) => {
  //     const reader = new FileReader(); //+
  //     reader.onload = () => {
  //       //+
  //       this.imagePreviews.push(reader.result as string); //+
  //     };
  //     reader.readAsDataURL(file);
  //   });
  // } //+

  // onFileSelected(event) {
  //   if (event.target.files) {
  //     const file = event.target.files[0];

  //     const fileHandle: FileHandle = {
  //       file: file,
  //       url: this.sanitizer.bypassSecurityTrustUrl(
  //         window.URL.createObjectURL(file)
  //       ),
  //     };
  //     this.newsObject.newsImages.push(fileHandle);
  //   }
  // }







  // onImageSelected(event: any): void {
  //   this.imageFile = event.target.files[0];
  // }

  // onVideoSelected(event: any): void {
  //   this.videoFile = event.target.files[0];
  // }

  // onSubmit(): void {

  //   console.log('Calling onSubmit');

  //   const formData = new FormData();
  //   formData.append('title', this.newsForm.get('title')?.value);
  //   formData.append('content', this.newsForm.get('content')?.value);
  //   formData.append('author', this.newsForm.get('author')?.value);

  //   if (this.imageFile) {
  //     formData.append('imageUrl', this.imageFile, this.imageFile.name);

  //     console.log('image if file');

  //   }

  //   if (this.videoFile) {
  //     formData.append('videoUrl', this.videoFile, this.videoFile.name);

  //     console.log('video if file');

  //   }

  //   this.newsService.createNews(formData).subscribe(
  //     (response) => {
  //       console.log('News created successfully', response);
  //     },
  //     (error) => {
  //       console.error('Error creating news', error);
  //     }
  //   );

  //   console.log('News created successfully');
  // }


