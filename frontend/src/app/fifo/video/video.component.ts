import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { videoPostModel } from 'src/app/_model/videoPost.model';
import { ServicePostService } from 'src/app/_service/servicePost/service-post.service';
import { VideoPostService } from 'src/app/_service/videoPost/video-post.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {


   
  constructor(
    private router: Router,
    private service: VideoPostService
  ) {}

  ngOnInit() {
    this.getAllVideo();
  }

  //array

  videoDetails = [];

  public getAllVideo() {
    this.service.getAllVideo().subscribe(
      (response: videoPostModel[]) => {
        console.log(response);

        this.videoDetails = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  // details page
  detailsById(id) {
    // this.router.navigate(['/CareerView', {id:id}]);
  }


}
