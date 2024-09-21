import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { newsPostModel } from 'src/app/_model/newsPost.model';

@Injectable({
  providedIn: 'root',
})
export class NewsPostService {
  constructor(private http: HttpClient) {}

  // create a NEWS 
  public createNews(newsPost: FormData) {
    return this.http.post<newsPostModel>(
      'http://localhost:8080/api/admin/postNews2',
      newsPost
    );
  }

  // get/show all NEWS
  public getAllNews(){
    return this.http.get<newsPostModel[]> ('http://localhost:8080/api/admin/getAllNews');
  }

  //delete a NEWS
  public deleteNews(id: number) {
    return this.http.delete("http://localhost:8080/api/admin/deleteNews" + id);
  }




  // edit a NEWS
  public getNewsById(id: number) {
    return this.http.get<newsPostModel>(`http://localhost:8080/api/admin/editNews/${id}`);
  }
}
