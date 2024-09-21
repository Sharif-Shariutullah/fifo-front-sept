import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FifoServicesModel } from 'src/app/_model/servicePost.model';

@Injectable({
  providedIn: 'root'
})
export class ServicePostService {


  constructor(private httpClient: HttpClient) {}


  
  // create 
  public createFifoService(fifoSerMod: FifoServicesModel) {
    return this.httpClient.post<FifoServicesModel>(
      'http://localhost:8080/api/admin/postService',
      fifoSerMod
    );
  }


  // get/show all 
  public getAllFifoServices() {
    return this.httpClient.get<FifoServicesModel[]>(
      'http://localhost:8080/api/admin/getAllServices'
    );
  }

  //delete 
  public deleteFifoServices(id: number) {
    return this.httpClient.delete(
      `http://localhost:8080/api/admin/deleteService/${id}`
    );
    // return this.httpClient.delete("http://localhost:8080/api/admin/deleteService/"+id);
  }




  
  // edit
  public getFifoServiceById(id) {
    return this.httpClient.get<FifoServicesModel>(
      `http://localhost:8080/api/getServiceById/${id}`
    );
    // return this.httpClient.get<jobPosting>("http://localhost:8080/api/getServiceById/"+id));
  }
}
