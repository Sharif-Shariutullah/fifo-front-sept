import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pdf } from 'src/app/_model/pdf.model';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private httpClient: HttpClient) { }

  // create a new Application

  public aapplyJob( p: pdf) {
    return this.httpClient.post<pdf>('http://localhost:8080/api/apply', p);
  }



  // get or show all Application
  // public getAllApplication() {
  //   return this.httpClient.get<JobApplicant[]>('http://localhost:8080/api/getAllJobApplicant');
  // }



}

