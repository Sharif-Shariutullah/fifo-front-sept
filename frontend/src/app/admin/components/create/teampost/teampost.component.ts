import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { teamModel } from 'src/app/_model/team.model';
import { TeamService } from 'src/app/_service/team/team.service';

@Component({
  selector: 'app-teampost',
  templateUrl: './teampost.component.html',
  styleUrls: ['./teampost.component.scss']
})
export class TeampostComponent {
  // 1. injecting the service where i http requests/method are made

 constructor(
  private router: Router,
  private serviceClass: TeamService) { }
 

// 2. creating an object

Object: teamModel = {

  name: '',
  designation: '',
  mail: '',
  linkedInId: '',
  details: '',

    // teamImage : 


};



// 3. submit button method
createTeamMember(TeamMemberForm: NgForm) {
  this.serviceClass.createTeam(this.Object).subscribe(
    (response: teamModel) => {
      console.log(response);

      this.router.navigate(['/teamList']);

      TeamMemberForm.reset();
    }, (error: HttpErrorResponse) => {
      console.log(error);
    }
  )

}




}
