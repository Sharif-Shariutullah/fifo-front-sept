import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileEntity } from 'src/app/_model/FileEntity.model';
import { FileUploadService } from 'src/app/_service/file-upload.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


// Read More and Read Less 


readMore = false; // Initially, the "Read More" content is hidden

  toggleReadMore() {
    this.readMore = !this.readMore; // Toggle between true and false
  }



  readMore2 = false; // Initially, the "Read More" content is hidden

  toggleReadMore2() {
    this.readMore2 = !this.readMore2; // Toggle between true and false
  }












  selectedFile: File | null = null;
  fileId: number | null = null;
  message: string = '';
  files: FileEntity[] = [];



  constructor(private fileService: FileUploadService) { }



  ngOnInit(): void {
    this.getAllFiles();
  }




  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (this.selectedFile) {
      this.fileService.uploadFile(this.selectedFile).subscribe(
        (response) => {
          this.message = 'File uploaded successfully';
        },
        (error) => {
          this.message = 'File upload failed';
        }
      );
    }
  }

  downloadFile(): void {
    if (this.fileId !== null) {
      this.fileService.downloadFile(this.fileId).subscribe(
        (blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `file_${this.fileId}`;
          a.click();
          window.URL.revokeObjectURL(url);
          this.message = 'File downloaded successfully';
        },
        (error) => {
          this.message = 'File download failed';
        }
      );
    }
  }
  

  
  // Fetch all files (It works!)

  

  // getAllFiles(): void {
  //   this.fileService.getAllFiles().subscribe(
  //     (files) => {
  //       this.files = files;
  //     },
  //     (error) => {
  //       this.message = 'Failed to load files';
  //     }
  //   );
  // }


 // Fetch all files with Base64 images
 getAllFiles(): void {
  this.fileService.getAllFilesWithBase64().subscribe(
    (files) => {
      this.files = files;
    },
    (error) => {
      this.message = 'Failed to load files';
    }
  );
}

}


// selectedFile: File | null = null;
// newsTitle: string = '';
// newsSubtitle: string = '';
// postDate: string = '';  // You can adjust this based on the date format needed
// newsDescription: string = '';
// message: string = '';
// files: FileEntity[] = [];  // Define the 'files' array here


// constructor(private fileService: FileUploadService, private router: Router) { }

//   ngOnInit(): void {
//     this.loadFiles();
//   }





//   // Method to load files from the server
//   loadFiles(): void {
//     this.fileService.getFiles().subscribe(
//       (response: FileEntity[]) => {
//         this.files = response;  // Assign response to 'files'
//       },
//       (error) => {
//         console.error('Error fetching files', error);
//       }
//     );
//   }

//   viewDetails(id: number): void {
//     this.router.navigate(['/details', id]);
//   }












//   // Method to handle file selection
//   onFileSelected(event: any): void {
//     this.selectedFile = event.target.files[0];
//   }

//   // Method to upload the news file and data
//   uploadNewsFile(): void {
//     if (this.selectedFile && this.newsTitle && this.newsSubtitle && this.postDate && this.newsDescription) {
//       this.fileService.uploadFile(this.selectedFile, this.newsTitle, this.newsSubtitle, this.postDate, this.newsDescription).subscribe(
//         (response) => {
//           this.message = 'News file uploaded successfully';
//           // Reset form after successful upload
//           this.resetForm();
//         },
//         (error) => {
//           this.message = 'News file upload failed';
//         }
//       );
//     } else {
//       this.message = 'Please fill out all fields before submitting';
//     }
//   }

//   // Method to reset form after uploading
//   resetForm(): void {
//     this.selectedFile = null;
//     this.newsTitle = '';
//     this.newsSubtitle = '';
//     this.postDate = '';
//     this.newsDescription = '';
//   }








