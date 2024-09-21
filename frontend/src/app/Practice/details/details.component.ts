import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PracticeService } from '../service/practice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {


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




  // // serach kaj korche na
  



  // submitForm() {
  //   this.products = [];
  //   const title = this.searchProductForm.get('title')!.value;
  //   // console.log(title,'-----title-----'); 25.08.24 (sunday update)
    
  //   this.adminService.getAllProductsByName(title).subscribe(res => {
  //     res.forEach(element => {
  //       element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
  //       this.products.push(element);
  //     });

  //     // console.log(this.products); 25.08.24 (sunday update)


  //   })
  // }




  deletePractice(id: any) {
    this.practiceService.deletePractice(id).subscribe(res => {
      if (res == null) {
   this.snackBar.open('practice Deleted Successfully!', 'close', {
        duration: 5000
      });
      this.getAllPractice();
      } else {
        this.snackBar.open(res.message, 'close', {
          duration: 5000,
          panelClass: 'error-snackbar'
        });
      }
      })
  }













}
