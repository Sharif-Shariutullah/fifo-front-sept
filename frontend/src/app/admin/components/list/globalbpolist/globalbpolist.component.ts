import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { globalBpoModel } from 'src/app/_model/globalBpo.model';
import { GlobalBpoService } from 'src/app/_service/globalBpo/global-bpo.service';

@Component({
  selector: 'app-globalbpolist',
  templateUrl: './globalbpolist.component.html',
  styleUrls: ['./globalbpolist.component.scss']
})

export class GlobalbpolistComponent implements OnInit {
  posts: any[] = [];

  constructor(private bpoService: GlobalBpoService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.bpoService.getAllGlobalBPOs().subscribe(data => {
      // Map the response to include previewUrl for each image
      this.posts = data.map(post => {
        if (post.images) {
          post.images = post.images.map(image => ({
            ...image,
            previewUrl: this.getImageUrl(image.image) // Set initial preview URL from image data
          }));
        }
        return post;
      });
    },
    (error: HttpErrorResponse) => { 
      console.log(error); 
    });
  }

  // Convert byte array to image URL
  getImageUrl(imageData: any): string {
    // Check if imageData is a valid byte array or string
    if (imageData) {
      const base64String = btoa(String.fromCharCode(...new Uint8Array(imageData)));
      return `data:image/jpeg;base64,${base64String}`;
    }
    return '';
  }

  deleteButton(id: number): void {
    this.bpoService.deleteGlobalBPO(id).subscribe(
      (response) => { 
        console.log(response); 
        this.loadPosts(); // Refresh the list after deletion
      },
      (error: HttpErrorResponse) => { 
        console.log(error); 
      }
    );
  }
}


// ---------------------it works but i add more 
// export class GlobalbpolistComponent implements OnInit{



//   constructor(private bpoService: GlobalBpoService) {}

//   posts: any[] = [];


//   ngOnInit(): void {
//     this.loadPosts();
//   }



//   loadPosts(): void {
//     this.bpoService.getAllGlobalBPOs().subscribe(data => {
//       this.posts = data;
//     },
//     (error: HttpErrorResponse) => { console.log(error); }
  
  
  
//   );
//   }

//   getImageUrl(imageData: any): string {
//     // Convert byte array to image URL
//     const base64String = btoa(String.fromCharCode(...new Uint8Array(imageData)));
//     return `data:image/jpeg;base64,${base64String}`;
//   }





//   deleteButton(id) {
//     this.bpoService.deleteGlobalBPO(id).subscribe(
//       (response) => { 
//         console.log(response); 
//       this.loadPosts();
      
//       },
//       (error: HttpErrorResponse) => { console.log(error); }
//     );

//   }






// }














  // globalBPOs: any[] = [];
  // ngOnInit(): void {
  //   this.bpoService.getAllGlobalBPOs().subscribe(data => {
  //     this.globalBPOs = data;
  //   });
  // }

  // deleteBPO(id: number): void {
  //   this.bpoService.deleteGlobalBPO(id).subscribe(() => {
  //     this.globalBPOs = this.globalBPOs.filter(bpo => bpo.id !== id);
  //   });
  // }



//  // 1. injecting the service where i http requests/method are made

//  constructor(
//   private router: Router,
//   private service: GlobalBpoService) { }


// // 2. creating an object

// Object: globalBpoModel = {

//   title: '',
//   subtitle: '',
//   details: '',

// //date : 
// // bpoImage :
// // bpoVideo :

// };


// ngOnInit(): void {
//   this.getAllGlobalBPO();
// }



// // data source which is array 
// listArray: globalBpoModel[] = [];

// // table colomn names 
// displayedColumns: string[] = ['ID', 'Title', 'Subtitle','Details', 'Edit', 'Delete'];


// // 3. method button method

// public getAllGlobalBPO() {

//   this.service.getAllGlobalBpo().subscribe(
//     (response: globalBpoModel[]) => {
//       console.log(response);

//       this.listArray = response;
//     }, (error: HttpErrorResponse) => { console.log(error); }
//   );
// };



// // delete news
// delete(id) {
//   this.service.deleteGlobalBpo(id).subscribe(
//     (response) => {
//       console.log(response);
//       this.getAllGlobalBPO();
//     },
//     (error: HttpErrorResponse) => { console.log(error); }
//   )


// }



// // edit news
// edit(id) {

// }






 