import { Router } from '@angular/router';
import { newsPostModel } from './../../../../_model/newsPost.model';
import { Component, OnInit } from '@angular/core';
import { NewsPostService } from 'src/app/_service/NewsPost/news-post.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.scss']
})
export class NewslistComponent implements OnInit {


  constructor(
    private router: Router,
    private newsService: NewsPostService) {

  };


    
  newsObject: newsPostModel = {
    title: '',
  subtitle: '',
  description: [],
  img: '',

  createDate: '',
  createTime: '',
  lastUpdated: ''

    // img: []


  };



  ngOnInit(): void {
this.getAllNews();
  }


  // data source which is array 
  newsModelArray: newsPostModel[] = [];

  // table colomn names 
  displayedColumns: string[] = ['#', 'ID', 'News Title', 'Subtitle', 'Description', 'Image', 'Delete'];




//   public getAllNews() {

//     this.newsService.getAllNews().subscribe(
//       (response: newsPostModel[]) => {
        
//         console.log(response);
//         this.newsModelArray = response;


//     // Convert each news item image (byte array) to a base64 string
//     // this.newsModelArray = response.map(news => ({


//     //   ...news,
      
//     //   img: news.img ? this.convertByteArrayToBase64(news.img) : null, // Convert byte array to base64 string only if it exists


//     // }));




//       }, (error: HttpErrorResponse) => { console.log(error); }
//     );
//   };








//   // practice: any[] = [];

//   // getAllNews() {
//   //   this.practice = [];
//   //   this.newsService.getAllNews().subscribe(res => {
//   //     res.forEach(element => {
//   //       element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
//   //       this.practice.push(element);

//   //       // console.log( this.products);  25.08.24 (sunday update)
        
//   //     });
//   //   })
//   // }





// // Method to convert byte array to base64 string
// convertByteArrayToBase64(byteArray: Uint8Array): string {
//   const binaryString = String.fromCharCode(...new Uint8Array(byteArray));
//   return `data:image/jpeg;base64,${btoa(binaryString)}`;
// }














// delete news
  


newsData: any[] = [];


getAllNews(): void {
  this.newsService.getAllNews().subscribe(
    (data) => {
      this.newsData = data;
      this.newsData.forEach((element) => {
        console.log('Processing element:', element);
        this.processImage(element);
      });
    },
    (error) => {
      console.error('Error fetching news:', error);
    }
  );
}

processImage(element: any): void {
  if (element.byteImg) {
    const base64Image = `data:image/jpeg;base64,${element.byteImg}`;
    element.img = base64Image;
    console.log('Image processed for element:', element.id);
  } else {
    console.warn('No image data found for element:', element);
    element.img = null;
  }
}













deleteNews(id){
this.newsService.deleteNews(id).subscribe(
  (response) => { 
    console.log(response);  
    this.getAllNews();
},
    (error: HttpErrorResponse) => { console.log(error); }
)


  }



  // edit news
editNews(id){

}

}