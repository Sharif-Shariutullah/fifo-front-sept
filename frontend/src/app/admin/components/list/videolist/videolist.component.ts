import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { videoPostModel } from 'src/app/_model/videoPost.model';
import { VideoPostService } from 'src/app/_service/videoPost/video-post.service';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.scss']
})
export class VideolistComponent implements OnInit {


// 1. injecting the service where i http requests/method are made

constructor(
  private router: Router,
  private service: VideoPostService) { }


// 2. creating an object

Object: videoPostModel = {

  videoName: '',
  videoDetails: '',
  youtubeIframe: '',

  // video :

};

ngOnInit(): void {
  this.getAllVideo();
}




  // data source which is array 
  listArray: videoPostModel[] = [];

  // table colomn names 
  displayedColumns: string[] = ['ID', 'Video Name', 'Subtitle', 'Youtube Iframe', 'Edit', 'Delete'];


  // 3. method button method

  public getAllVideo() {

    this.service.getAllVideo().subscribe(
      (response: videoPostModel[]) => {
        console.log(response);

        this.listArray = response;
      }, (error: HttpErrorResponse) => { console.log(error); }
    );
  };



  // delete news
  delete(id) {
    this.service.deleteVideo(id).subscribe(
      (response) => {
        console.log(response);
        this.getAllVideo();
      },
      (error: HttpErrorResponse) => { console.log(error); }
    )


  }



  // edit news
  edit(id) {

  }




}
 