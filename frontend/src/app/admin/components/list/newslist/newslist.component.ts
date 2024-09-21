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

  // 1. injecting the service where i http requests/method are made


  constructor(
    private router: Router,
    private newsService: NewsPostService) {

  };

  // 2. creating an object

    
  newsObject: newsPostModel = {

    title: '',
    content: '',
    imageUrl: '',
    videoUrl: '',
    author: '',
    publishedAt: '',
    newsImages: []


    // title, content, imageUrl, videoUrl, author, publishedAt
  };



  ngOnInit(): void {
this.getAllNews();
  }


  // data source which is array 
  newsModelArray: newsPostModel[] = [];

  // table colomn names 
  displayedColumns: string[] = ['ID', 'News Title', 'Description', 'Author', 'Image', 'Video', 'Edit', 'Delete'];


  // 3. method button method

  public getAllNews() {

    this.newsService.getAllNews().subscribe(
      (response: newsPostModel[]) => {
        console.log(response);

        this.newsModelArray = response;
      }, (error: HttpErrorResponse) => { console.log(error); }
    );
  };



// delete news
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