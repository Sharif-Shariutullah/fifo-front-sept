import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileEntity } from '../_model/FileEntity.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {




  private baseUrl = 'http://localhost:8080/api/files';

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    let formData: FormData;
    formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.baseUrl}/upload`, formData, { responseType: 'text' });
  }

  downloadFile(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/download/${id}`, { responseType: 'blob' });
  }


  // New method to get all files
  getAllFiles(): Observable<FileEntity[]> {
    return this.http.get<FileEntity[]>(`${this.baseUrl}/all`);
  }




  // New method to get files with Base64 data
  getAllFilesWithBase64(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/allWithBase64`);
  }











 // newly added--------------
  
 
 
}



 
//  private baseUrl = 'http://localhost:8080/api/files';

//  constructor(private http: HttpClient) { }

//  // Method to fetch files
//  getFiles(): Observable<FileEntity[]> {
//    return this.http.get<FileEntity[]>(`${this.baseUrl}`);
//  }

//  // Upload file and news data
//  uploadFile(file: File, newsTitle: string, newsSubtitle: string, postDate: string, newsDescription: string): Observable<any> {
//    const formData = new FormData();
//    formData.append('file', file);
//    formData.append('newsTitle', newsTitle);
//    formData.append('newsSubtitle', newsSubtitle);
//    formData.append('postDate', postDate);
//    formData.append('newsDescription', newsDescription);

//    return this.http.post(`${this.baseUrl}/upload`, formData, { responseType: 'text' });
//  }

//   // Method to get file details by ID
//   getFileDetails(id: number): Observable<FileEntity> {
//     return this.http.get<FileEntity>(`${this.baseUrl}/${id}`);
//   }
