import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { newsPostModel } from 'src/app/_model/newsPost.model';
import { NewsPostService } from 'src/app/_service/NewsPost/news-post.service';
import { PracticeService } from 'src/app/Practice/service/practice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  
  
  newsData: any[] = [];

  constructor(private newsService: NewsPostService,
    private router: Router,

  ) {}

  ngOnInit(): void {
    this.getAllNews();
  }






// get all method 

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





  // // details page
  // getNewsById(id: number) {
  //   this.newsService.getNewsById(id).subscribe(
  //     (response: newsPostModel[]) => {

  //       console.log(response);

  //       // this.newsData = response;

  //       this.router.navigate(['/news-details', id]);
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.error('Error fetching News details:', error);
  //       console.log(error);
  //     }
  //   );
  // }





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
 