import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { globalBpoModel } from 'src/app/_model/globalBpo.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalBpoService {


  
  private baseUrl = 'http://localhost:8080/api/admin'; // Adjust base URL if needed

  constructor(private http: HttpClient) {}

  createGlobalBPO(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/createGlobalBPO`, formData);
  }

  getAllGlobalBPOs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllGlobalBPOs`);
  }

  deleteGlobalBPO(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteGlobalBPO/${id}`);
  }

}




  // // create 
  // public createGlobalBpo(BPOModel: globalBpoModel) {
  //   return this.httpClient.post<globalBpoModel>(
  //     'http://localhost:8080/api/admin/postNewGlobalBPO',
  //     BPOModel
  //   );
  // }

  // // get/show 
  // public getAllGlobalBpo() {
  //   return this.httpClient.get<globalBpoModel[]>(
  //     'http://localhost:8080/api/admin/getAllGlobalBPO'
  //   );
  // }

  // //delete 
  // public deleteGlobalBpo(id: number) {
  //   return this.httpClient.delete(
  //     `http://localhost:8080/api/admin/deleteGlobalBPO/${id}`
  //   );
  //   // return this.httpClient.delete("http://localhost:8080/api/admin/deleteGlobalBPO/"+id);
  // }

  
  // // edit 
  // public getGlobalBpoById(id) {
  //   return this.httpClient.get<globalBpoModel>(
  //     `http://localhost:8080/api/getGlobalBPOById/${id}`
  //   );
  //   // return this.httpClient.get<globalBpoModel>("http://localhost:8080/api/getGlobalBPOById/"+id));
  // }
