import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { globalBpoModel } from 'src/app/_model/globalBpo.model';
import { GlobalBpoService } from 'src/app/_service/globalBpo/global-bpo.service';
import { PracticeService } from 'src/app/Practice/service/practice.service';



@Component({
  selector: 'app-globalbpo',
  templateUrl: './globalbpo.component.html',
  styleUrls: ['./globalbpo.component.scss']
})
export class GlobalbpoComponent implements OnInit {



  constructor(
    private bpoService: GlobalBpoService,
  private router : Router) {}
  
    // --------------------------frontend -------------------

  
  isModalOpen = false;
  currentImage: string;
  
   // Method to open the modal with the clicked image
   openModal(imageSrc: string): void {
    this.currentImage = imageSrc;
    this.isModalOpen = true;
  }

  // Method to close the modal
  closeModal(): void {
    this.isModalOpen = false;
    this.currentImage = '';
  }


  // --------------------------Backend -------------------

  globalBPOs: globalBpoModel[] = [];
  errorMessage: string | null = null; // To hold any error messages


  ngOnInit(): void {
    this.getAllGlobalBPOs();
  }

  getAllGlobalBPOs() {
    this.bpoService.getAllGlobalBPOs().subscribe({
      next: (data) => {
        this.globalBPOs = data;
        this.handleImageData(); // Call to handle image data conversion
      },
      error: (error) => {
        this.errorMessage = error; // Capture error for display
      }
    });
  }

  private handleImageData() {
    this.globalBPOs.forEach(bpo => {
      bpo.images.forEach(image => {
        // If your backend returns base64 directly, use it directly
        image.img = 'data:image/jpeg;base64,' + image.img; // Make sure to prepend the correct data URI scheme
      });
    });
  }
  
  // Helper function to convert Uint8Array to base64
  private arrayBufferToBase64(buffer: Uint8Array): string {
    let binary = '';
    const len = buffer.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(buffer[i]);
    }
    return window.btoa(binary); // Convert binary string to base64
  }
  





// call the details page
getGlobalBPOById(id: number) {
  this.router.navigate(['/global-bpo-view', id]);
}






}
