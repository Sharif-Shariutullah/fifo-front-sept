import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { photoUploadModel } from 'src/app/_model/photoUpload.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoUploadService {

  constructor(private httpClient: HttpClient) {}

  // create 
  public createGallery(photoUpMod: photoUploadModel) {
    return this.httpClient.post<photoUploadModel>(
      'http://localhost:8080/api/admin/postNewGallery',
      photoUpMod
    );
  }


  // get/show 
  public getAllGallery() {
    return this.httpClient.get<photoUploadModel[]>(
      'http://localhost:8080/api/admin/getAllGallery'
    );
  }

  //delete 
  public deleteGallery(id: number) {
    return this.httpClient.delete(
      `http://localhost:8080/api/admin/deleteGallery/${id}`
    );
    // return this.httpClient.delete("http://localhost:8080/api/admin/deleteGallery/"+id);
  }




  
  // edit 
  public getGalleryById(id) {
    return this.httpClient.get<photoUploadModel>(
      `http://localhost:8080/api/getGalleryById/${id}`
    );
    // return this.httpClient.get<photoUploadModel>("http://localhost:8080/api/getGalleryById/"+id));
  }







  
}
