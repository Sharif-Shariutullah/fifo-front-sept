import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { photoUploadModel } from 'src/app/_model/photoUpload.model';
import { videoPostModel } from 'src/app/_model/videoPost.model';
import { VideoPostService } from 'src/app/_service/videoPost/video-post.service';

@Component({
  selector: 'app-videopost',
  templateUrl: './videopost.component.html',
  styleUrls: ['./videopost.component.scss']
})
export class VideopostComponent {

  // 1. injecting the service where i http requests/method are made

  constructor(
    private router: Router,
    private serviceClass: VideoPostService) { }


  // 2. creating an object

  Object: videoPostModel = {

    videoName: '',
    videoDetails: '',
    youtubeIframe: '',


    // video :

  };



  // 3. submit button method
  createVideo(videoForm: NgForm) {
    this.serviceClass.createVideo(this.Object).subscribe(
      (response: videoPostModel) => {
        console.log(response);

        this.router.navigate(['/videoList']);

        videoForm.reset();
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }
    )

  }

}
