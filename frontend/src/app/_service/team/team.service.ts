import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { teamModel } from 'src/app/_model/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpClient: HttpClient) {}
  
  // create 
  public createTeam(team: teamModel) {
    return this.httpClient.post<teamModel>(
      'http://localhost:8080/api/admin/postNewTeamMember',
      team
    );
  }

  // get/show 
  public getAllTeam() {
    return this.httpClient.get<teamModel[]>(
      'http://localhost:8080/api/admin/getAllTeamMember'
    );
  }

  //delete 
  public deleteTeam(id: number) {
    return this.httpClient.delete(
      `http://localhost:8080/api/admin/deleteTeamMember/${id}`
    );
    // return this.httpClient.delete("http://localhost:8080/api/admin/deleteTeamMember/"+id);
  }




  
  // edit 
  public getTeamById(id) {
    return this.httpClient.get<teamModel>(
      `http://localhost:8080/api/getTeamMemberById/${id}`
    );
    // return this.httpClient.get<teamModel>("http://localhost:8080/api/getTeamMemberById/"+id));
  }
}
