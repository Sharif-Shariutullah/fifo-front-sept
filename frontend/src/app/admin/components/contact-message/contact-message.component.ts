import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { contactModel } from 'src/app/_model/contact.model';
import { ClientContactService } from 'src/app/_service/clientContact/client-contact.service';

@Component({
  selector: 'app-contact-message',
  templateUrl: './contact-message.component.html',
  styleUrls: ['./contact-message.component.scss']
})
export class ContactMessageComponent implements OnInit {

  constructor(
    private service: ClientContactService,
    private router: Router
    ) {  }


  clientContactObject: contactModel = {

    companyName: '',
    companyAddress: '',
    clientName: '',
    email: '',
    companyPhone: '',
    companyMobileNumber: '',
    message: '',
  };

  ngOnInit(): void {
    this.getAllClientContac();
  }

 // data source which is array 
 contactDetails: contactModel[] = [];

 // table colomn names 
 displayedColumns: string[] = ['#', 'ID', 'Company Name', 'Company Address', 'Client Name', 'Email', 'Company Phone', 'Mobile', 'Message'];


 public getAllClientContac() {

   this.service.getAllClientsContact().subscribe(
     (response: contactModel[]) => {
       console.log(response);

       this.contactDetails = response;

     }, (error: HttpErrorResponse) => { console.log(error); }


   );
 }



}
