import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { newsPostModel } from 'src/app/_model/newsPost.model';
import { NewsPostService } from 'src/app/_service/NewsPost/news-post.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.scss']
})
export class ViewNewsComponent implements OnInit{

  constructor(
    private route: ActivatedRoute, 
    private newsService: NewsPostService,
    private router: Router,
  ) {}






  isHorizontalImage: boolean = false;


  loadNewsData() {
    // Your logic to fetch the news data and assign it to newsModelArray
    // After fetching the data, determine the image orientation

    // Example logic to check image orientation
    const img = new Image();
    img.src = this.newsModelArray.img;
    img.onload = () => {
      this.isHorizontalImage = img.width > img.height; // Set to true if horizontal
    };
  }








  // ---------------------------------------backend-------------------------




  // newsModelArray: newsPostModel = [];



  // newsModelArray: newsPostModel;
  newsModelArray: newsPostModel = {

    title: '',
    subtitle: '',
    description: [],
    img: '',
    createDate: '',
    createTime: '',
    lastUpdated: ''
  };
  

//   ngOnInit(){

//    const id = Number(this.route.snapshot.paramMap.get('id'));
   
//     // Fetch news details by ID
//     this.newsService.getNewsById(id).subscribe(
//       (response: newsPostModel) => {
//         this.newsModelArray = response;

//          // Process the image data
//       // this.processImage(this.newsModelArray);


//    // Process image if it's not already in a displayable format
//    if (this.newsModelArray.img) {
//     this.processImage();
//   }


//       },
//       (error: HttpErrorResponse) => {
//         console.error('Error loading job details:', error);
//       }
//     );
   
//  }










  // table colomn names 
 
 
  // ngOnInit() {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  
  //   // Fetch news details by ID
  //   this.newsService.getNewsById(id).subscribe(
  //     (response: newsPostModel) => {
  //       this.newsModelArray = response;
  
  //       // Convert byteImg to base64 image URL format
  //       if (this.newsModelArray.byteImg) {
  //         this.newsModelArray.img = `data:image/jpeg;base64,${this.newsModelArray.byteImg}`;
  //       }
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.error('Error loading news details:', error);
  //     }
  //   );
  // }
  
 
 
  ngOnInit() {

    this.loadNewsData(); // frontend

    this.getAllNews(); // Call this method to fetch all news items
   
   
    // this.route.paramMap.subscribe(params => {
    //   const id = Number(params.get('id'));
    //   this.getNewsById(id); // Fetch the news details when the component initializes
    // });



    const id = Number(this.route.snapshot.paramMap.get('id'));
  
    // Fetch news details by ID
    this.newsService.getNewsById(id).subscribe(
      (response: newsPostModel) => {
        this.newsModelArray = response;
  
        // Use dynamic field access to handle byteImg
        const byteImg = (response as any).byteImg;
        if (byteImg) {
          this.newsModelArray.img = `data:image/jpeg;base64,${byteImg}`;
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Error loading news details:', error);
      }
    );
  }
  



newsData: any[] = [];


// getAllNews(): void {
//   this.newsService.getAllNews().subscribe(
//     (data) => {
//       this.newsData = data;
//       this.newsData.forEach((element) => {
//         console.log('Processing element:', element);
//         this.processImage(element);
//       });
//     },
//     (error) => {
//       console.error('Error fetching news:', error);
//     }
//   );
// }

// processImage(element: any): void {
//   if (element.byteImg) {
//     const base64Image = `data:image/jpeg;base64,${element.byteImg}`;
//     element.img = base64Image;
//     console.log('Image processed for element:', element.id);
//   } else {
//     console.warn('No image data found for element:', element);
//     element.img = null;
//   }
// }


processImage(): void {
  if (this.newsModelArray.img && typeof this.newsModelArray.img !== 'string') {
    // Assuming the img is in a binary format, convert it to base64
    const binaryImage = this.newsModelArray.img; 
    const base64Image = `data:image/jpeg;base64,${binaryImage}`;
    this.newsModelArray.processedImg = base64Image;
  } else {
    // If img is already a base64 string, directly use it
    this.newsModelArray.processedImg = this.newsModelArray.img;
  }
}




getAllNews() {
  this.newsService.getAllNews().subscribe(
    (data: newsPostModel[]) => {
      this.newsData = data; // Store the fetched news data
   
   this.newsData.forEach(news => {
    news.description = news.description.replace(/[\[\]"]+/g, '');  // Remove any stray brackets or quotes

   }

   )
   
   
   
    },
    (error) => {
      console.error('Error fetching news:', error);
    }
  );
}


// details page
getNewsById(id: number) {
  this.newsService.getNewsById(id).subscribe(
    (response: newsPostModel) => {  // Expect a single newsPostModel, not an array
      console.log(response);

      // If you need to set news data in this component, uncomment the line below:
      // this.newsData = response;

      // Navigate to the details page with the fetched ID
      this.router.navigate(['/news-details', id]);
      
    },
    (error: HttpErrorResponse) => {
      console.error('Error fetching News details:', error);
    }
  );
}



}
