import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  constructor(private http: HttpClient) { }


  addPractice(PracticeDto: any): Observable<any> {
    return this.http.post(BASIC_URL + 'api/admin/practices', PracticeDto)
  }


  getAllPractice(): Observable<any> {
    return this.http.get(BASIC_URL + 'api/admin/practices')
  }



  deletePractice(id: any): Observable<any> {
    return this.http.delete(BASIC_URL + `api/admin/practices/${id}`)
  }












}
