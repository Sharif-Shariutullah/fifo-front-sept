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



  // constructor(private router: Router, private newsService: NewsPostService) {}

  // ngOnInit(): void {
  //   this.getAllNews();
  // }
 
  // newsModelArray = [];

  // public getAllNews() {
  //   this.newsService.getAllNews().subscribe(
  //     (response: newsPostModel[]) => {
  //       this.newsModelArray = response;
  //       console.log(this.newsModelArray);

  //       this.newsModelArray.forEach((element) => {
  //         var imageSrc: string | ArrayBuffer | null = '';

  //         const reader = new FileReader();
  //         reader.onloadend = () => {
  //           element.imageSrc = reader.result;
  //         };
  //         reader.readAsDataURL(new Blob([element.newsImages[0].picByte]));
  //       });

  //     },
  //     (error: HttpErrorResponse) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // convertBinaryToBase64(binaryData: any) {
  //   console.log(binaryData);
  //   var imageSrc: string | ArrayBuffer | null = '';

  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     imageSrc = reader.result;
  //   };
  //   reader.readAsDataURL(new Blob([binaryData]));
  //   return imageSrc;
  // }

  // // details page
  // newsDetailsViewPage(id) {
  //   this.router.navigate(['/পাইজের নাম হইবো', { id: id }]);
  // }







  practice: any[] = [];

  searchProductForm!: FormGroup;

  constructor(
    private practiceService: PracticeService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getAllPractice();
    this.searchProductForm = this.fb.group({
      title: [null, [Validators.required]]

    })
  }


  getAllPractice() {
    this.practice = [];
    this.practiceService.getAllPractice().subscribe(res => {
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.practice.push(element);

        // console.log( this.products);  25.08.24 (sunday update)
        
      });
    })
  }






}
