import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  products: any[] = [];

  searchProductForm!: FormGroup;

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getAllProducts();
    this.searchProductForm = this.fb.group({
      title: [null, [Validators.required]]

    })
  }


  getAllProducts() {
    this.products = [];
    this.adminService.getAllProducts().subscribe(res => {
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.products.push(element);

        // console.log( this.products);  25.08.24 (sunday update)
        
      });
    })
  }

  // serach kaj korche na
  



  submitForm() {
    this.products = [];
    const title = this.searchProductForm.get('title')!.value;
    // console.log(title,'-----title-----'); 25.08.24 (sunday update)
    
    this.adminService.getAllProductsByName(title).subscribe(res => {
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.products.push(element);
      });

      // console.log(this.products); 25.08.24 (sunday update)


    })
  }


  deletePro(productId: any) {
    this.adminService.deleteProduct(productId).subscribe(res => {
      if (res == null) {
   this.snackBar.open('Product Deleted Successfully!', 'close', {
        duration: 5000
      });
      this.getAllProducts();
      } else {
        this.snackBar.open(res.message, 'close', {
          duration: 5000,
          panelClass: 'error-snackbar'
        });
      }
      })
  }





}


