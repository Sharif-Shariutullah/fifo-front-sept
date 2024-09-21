import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { teamModel } from 'src/app/_model/team.model';
import { TeamService } from 'src/app/_service/team/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit{




  constructor(
    private router: Router,
    private serviceClass: TeamService) { }



    ngOnInit() {
      this.getAllTeam();
    }



    
  //array
  teamDetails = [];

  public getAllTeam() {
    this.serviceClass.getAllTeam().subscribe(
      (response: teamModel[]) => {
        console.log(response);

        this.teamDetails = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  // details page
  detailsById(id) {
    // this.router.navigate(['/CareerView', {id:id}]);
  }
}
