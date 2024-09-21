import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contactModel } from 'src/app/_model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ClientContactService {

  constructor(private httpClient: HttpClient) { }



  // create 
  public createContact(model: contactModel) {
    return this.httpClient.post<contactModel>(
      'http://localhost:8080/api/createContact',
      model
    );
  }

  // get/show 
  public getAllClientsContact() {
    return this.httpClient.get<contactModel[]>(
      'http://localhost:8080/api/getAlClientsContact'
    );
  }



}
