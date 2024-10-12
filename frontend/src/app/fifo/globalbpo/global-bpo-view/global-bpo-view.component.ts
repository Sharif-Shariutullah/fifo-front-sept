import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { globalBpoModel } from 'src/app/_model/globalBpo.model';
import { GlobalBpoService } from 'src/app/_service/globalBpo/global-bpo.service';

@Component({
  selector: 'app-global-bpo-view',
  templateUrl: './global-bpo-view.component.html',
  styleUrls: ['./global-bpo-view.component.scss']
})
export class GlobalBpoViewComponent implements OnInit{

  
  constructor(
    private bpoService: GlobalBpoService,
    private router : Router,
    private route: ActivatedRoute,
  ) {}
  




   // --------------------------frontend -------------------
//  bpo: any;  

  // Method to share on Facebook
  shareOnFacebook() {
    const url = window.location.href;  // Current page URL
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank');
  }

  // Method to share on LinkedIn
  shareOnLinkedIn() {
    const url = window.location.href;
    const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(this.bpo.title)}&summary=${encodeURIComponent(this.bpo.subtitle)}&source=LinkedIn`;
    window.open(linkedInUrl, '_blank');
  }

  // Method to share on Twitter
  shareOnTwitter() {
    const url = window.location.href;
    const text = `${this.bpo.title} - ${this.bpo.subtitle}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank');
  }

  // Method to print the page
  printPage() {
    window.print();
  }






  isModalOpen = false;
  currentImage: string = '';

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


  // ngOnInit(): void {
  //   this.getAllGlobalBPOs();
  // }

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

  // private handleImageData() {
  //   this.globalBPOs.forEach(bpo => {
  //     bpo.images.forEach(image => {
  //       // If your backend returns base64 directly, use it directly
  //       image.img = 'data:image/jpeg;base64,' + image.img; // Make sure to prepend the correct data URI scheme
  //     });
  //   });
  // }
  
  // Helper function to convert Uint8Array to base64
  private arrayBufferToBase64(buffer: Uint8Array): string {
    let binary = '';
    const len = buffer.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(buffer[i]);
    }
    return window.btoa(binary); // Convert binary string to base64
  }
  

  bpo: globalBpoModel | null = null;
  // errorMessage: string | null = null;



// ------------------------------------------------------new--------------------

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getGlobalBPOById(+id); // Convert ID to a number
    }
  }

  getGlobalBPOById(id: number): void {
    this.bpoService.getGlobalBPOById(id).subscribe({
      next: (data) => {
        this.bpo = data;
        this.handleImageData(); // Convert image if needed
      },
      error: (error) => {
        this.errorMessage = error;
      }
    });
  }

  private handleImageData() {
    if (this.bpo && this.bpo.images) {
      this.bpo.images.forEach(image => {
        image.img = 'data:image/jpeg;base64,' + image.img; // Ensure correct data URI scheme
      });
    }
  }

}
