import { getLocaleDateFormat } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobApplicant } from 'src/app/_model/JobApplicant.model';
import { jobPosting } from 'src/app/_model/jobPosting.model';
import { JobApplicantService } from 'src/app/_service/job-applicant.service';
import { JobpostService } from 'src/app/_service/jobpost.service';
import Swal from 'sweetalert2';

@Component({

  
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit, AfterViewInit {

// --------------------------------------------------------------frontend 


  @ViewChild('countElement') countElement!: ElementRef;
  private targetCount = 300;
  private currentCount = 0;


 
  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.startCounting.bind(this));
    this.startCounting(); 
  }
  
  private isElementInViewport(): boolean {
    const rect = this.countElement.nativeElement.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  private startCounting(): void {
    if (this.isElementInViewport()) {
      this.updateCount();
      window.removeEventListener('scroll', this.startCounting.bind(this));
    }
  }

  private updateCount(): void {
    if (this.currentCount < this.targetCount) {
      this.currentCount++;
      this.renderer.setProperty(this.countElement.nativeElement, 'textContent', `${this.currentCount}+`);
      requestAnimationFrame(this.updateCount.bind(this));
    }
  }















// ------------------------------------------------------------backend






























  // injecting the service where i http requests/method are made
 
  jobDetailsWithData: jobPosting; // a single object, not an array
 
 
  constructor(private route: ActivatedRoute, 
    private JobPostSer: JobpostService,
    private renderer: Renderer2, 
    private router: Router,
    private applyService: JobApplicantService
  ) { }


  ngOnInit(){





     // Get the job ID from the route


    //  const id = this.route.snapshot.paramMap.get('id');
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
     // Fetch job details by ID
     this.JobPostSer.getJobPostById(id).subscribe(
       (response: jobPosting) => {
         this.jobDetailsWithData = response;
       },
       (error: HttpErrorResponse) => {
         console.error('Error loading job details:', error);
       }
     );
    
  }





  
  application: JobApplicant = {
    name: '',
    address: '',
    email: '',
    phone: '',
    position: '',
    yearsOfExperience: 0,
    skills: '',

    
  };


  selectedFile!: File; // To store the selected PDF file
  applicationDetails: JobApplicant[] = [];

  displayedColumns: string[] = [
    'ID',
    'Name',
    'Address',
    'Email',
    'Phone',
    'Position',
    'Experience',
    'CV Download',
  ];

  // Handle file selection
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]; // Get the selected file
  }

  // Submit button method for applying a job
  applyForNewJob(applicationForm: NgForm) {
    const formData = new FormData();
    formData.append('name', this.application.name);
    formData.append('address', this.application.address);
    formData.append('email', this.application.email);
    formData.append('phone', this.application.phone);
    formData.append('position', this.application.position);
    formData.append(
      'yearsOfExperience',
      this.application.yearsOfExperience.toString()
    );
    formData.append('skills', this.application.skills);

    // Append the selected file to formData
    if (this.selectedFile) {
      formData.append('pdfFile', this.selectedFile);
    }

    this.applyService.applyForNewJob(formData).subscribe(
      (response: JobApplicant) => {
        Swal.fire({
          icon: 'success',
          title: 'Done',
          text: 'We got your application! We will contact you as soon as possible.',
          showConfirmButton: false,
          timer: 2500,
        });
        applicationForm.resetForm();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Please try again later.',
        });
      }
    );
  }





}
