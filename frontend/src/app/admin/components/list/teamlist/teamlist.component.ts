import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { teamModel } from 'src/app/_model/team.model';
import { TeamService } from 'src/app/_service/team/team.service';

@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.scss']
})
export class TeamlistComponent implements OnInit {

  // 1. injecting the service where i http requests/method are made

  constructor(
    private router: Router,
    private service: TeamService) { }


  // 2. creating an object

  Object: teamModel = {

    name: '',
    designation: '',
    mail: '',
    linkedInId: '',
    details: '',

    // teamImage : 

  };




  ngOnInit(): void {
    this.getAllTeam();
  }



  // data source which is array 
  listArray: teamModel[] = [];

  // table colomn names 
  displayedColumns: string[] = ['ID', 'About', 'Designation','Mail', 'LinkedIn', 'Edit', 'Delete'];


  // 3. method button method

  public getAllTeam() {

    this.service.getAllTeam().subscribe(
      (response: teamModel[]) => {
        console.log(response);

        this.listArray = response;
      }, (error: HttpErrorResponse) => { console.log(error); }
    );
  };



  // delete news
  delete(id) {
    this.service.deleteTeam(id).subscribe(
      (response) => {
        console.log(response);
        this.getAllTeam();
      },
      (error: HttpErrorResponse) => { console.log(error); }
    )


  }



  // edit news
  edit(id) {

  }


}
