import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { globalBpoModel } from 'src/app/_model/globalBpo.model';
import { GlobalBpoService } from 'src/app/_service/globalBpo/global-bpo.service';
import { PracticeService } from 'src/app/Practice/service/practice.service';

@Component({
  selector: 'app-globalbpo',
  templateUrl: './globalbpo.component.html',
  styleUrls: ['./globalbpo.component.scss']
})
export class GlobalbpoComponent implements OnInit {

 

  // constructor(
  //   private router: Router,
  //   private serviceClass: GlobalBpoService) { }
  

  //   ngOnInit() {
  //     this.getAllGlobalbpo();
  //   }
  
  
    
  //   //array
  //   globalBpoModelDetails = [];
  
  //   public getAllGlobalbpo() {
  //     this.serviceClass.getAllGlobalBpo().subscribe(
  //       (response: globalBpoModel[]) => {
  //         console.log(response);
  
  //         this.globalBpoModelDetails = response;
  //       },
  //       (error: HttpErrorResponse) => {
  //         console.log(error);
  //       }
  //     );
  //   }
  
  //   // details page
  //   detailsById(id) {
  //     // this.router.navigate(['/CareerView', {id:id}]);
  //   }







  practice: any[] = [];

  searchProductForm!: FormGroup;

  constructor(
    private practiceService: PracticeService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getAllPractice();
    this.searchProductForm = this.fb.group({
      title: [null, [Validators.required]]

    })
  }


  getAllPractice() {
    this.practice = [];
    this.practiceService.getAllPractice().subscribe(res => {
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.practice.push(element);

        // console.log( this.products);  25.08.24 (sunday update)
        
      });
    })
  }






}
