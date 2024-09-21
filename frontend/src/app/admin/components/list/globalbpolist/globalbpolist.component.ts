import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { globalBpoModel } from 'src/app/_model/globalBpo.model';
import { GlobalBpoService } from 'src/app/_service/globalBpo/global-bpo.service';

@Component({
  selector: 'app-globalbpolist',
  templateUrl: './globalbpolist.component.html',
  styleUrls: ['./globalbpolist.component.scss']
})
export class GlobalbpolistComponent {

 // 1. injecting the service where i http requests/method are made

 constructor(
  private router: Router,
  private service: GlobalBpoService) { }


// 2. creating an object

Object: globalBpoModel = {

  title: '',
  subtitle: '',
  details: '',

//date : 
// bpoImage :
// bpoVideo :

};


ngOnInit(): void {
  this.getAllGlobalBPO();
}



// data source which is array 
listArray: globalBpoModel[] = [];

// table colomn names 
displayedColumns: string[] = ['ID', 'Title', 'Subtitle','Details', 'Edit', 'Delete'];


// 3. method button method

public getAllGlobalBPO() {

  this.service.getAllGlobalBpo().subscribe(
    (response: globalBpoModel[]) => {
      console.log(response);

      this.listArray = response;
    }, (error: HttpErrorResponse) => { console.log(error); }
  );
};



// delete news
delete(id) {
  this.service.deleteGlobalBpo(id).subscribe(
    (response) => {
      console.log(response);
      this.getAllGlobalBPO();
    },
    (error: HttpErrorResponse) => { console.log(error); }
  )


}



// edit news
edit(id) {

}

}
 