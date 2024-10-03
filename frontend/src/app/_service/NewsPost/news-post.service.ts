import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newsPostModel } from 'src/app/_model/newsPost.model';


const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root',
})
export class NewsPostService {



  constructor(private http: HttpClient) {}


  
  addNews(NewsDto: any): Observable<any> {
    return this.http.post(BASIC_URL + 'api/admin/postNews', NewsDto)
  }


  getAllNews(): Observable<any> {
    return this.http.get(BASIC_URL + 'api/admin/news')
  }



  deleteNews(id: any): Observable<any> {
    return this.http.delete(BASIC_URL + `api/admin/news/${id}`)
  }

}





  // // create a NEWS 
  // public createNews(newsPost: FormData) {
  //   return this.http.post<newsPostModel>(
  //     'http://localhost:8080/api/admin/postNews2',
  //     newsPost
  //   );
  // }

  // // get/show all NEWS
  // public getAllNews(){
  //   return this.http.get<newsPostModel[]> ('http://localhost:8080/api/admin/getAllNews');
  // }

  // //delete a NEWS
  // public deleteNews(id: number) {
  //   return this.http.delete("http://localhost:8080/api/admin/deleteNews" + id);
  // }




  // // edit a NEWS
  // public getNewsById(id: number) {
  //   return this.http.get<newsPostModel>(`http://localhost:8080/api/admin/editNews/${id}`);
  // }





 



