import { NgForm } from '@angular/forms';
import { jobPosting } from './../_model/jobPosting.model';
import { Component, OnInit } from '@angular/core';
import { JobpostService } from '../_service/jobpost.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ExtraOptions, Router, Routes } from '@angular/router';
import { JobApplicantService } from '../_service/job-applicant.service';
import { JobApplicant } from '../_model/JobApplicant.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {
  scrollToSection() {
    const element = document.getElementById('jobDetails');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  constructor(
    private JobPostSer: JobpostService,
    private router: Router,
    private applyService: JobApplicantService
  ) {}

  //array
  jobDetails = [];

  public getAllJobs() {
    this.JobPostSer.getAllJobs().subscribe(
      (response: jobPosting[]) => {
        console.log(response);

        this.jobDetails = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  jobDetailsWithData: jobPosting; // a single object, not an array

  // details page
  JobViewDetails(id: number) {
    this.JobPostSer.getJobPostById(id).subscribe(
      (response: jobPosting) => {
        console.log(response);

        this.jobDetailsWithData = response;

        this.router.navigate(['/job-Details', id]);
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching job details:', error);
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getAllJobs();

    this.getAllApplication();
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

  // Get all applicants
  public getAllApplication() {
    this.applyService.getAllApplication().subscribe(
      (response: JobApplicant[]) => {
        this.applicationDetails = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  // Download CV
  downloadPdf(applicantId: number) {
    this.applyService.downloadPdf(applicantId).subscribe(
      (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        // link.download = 'applicant_resume.pdf';
        link.download = 'applicant_resume.pdf';
        link.click();
        window.URL.revokeObjectURL(url);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  // --------------------------------------------it works

  // // object

  //  application: JobApplicant = {

  //   name : "",
  //   address : "",
  //   email : "",
  //   phone : "",
  //   position : "",
  //   yearsOfExperience : 0,
  //   skills : "",

  // }

  // // submit button method
  // applyForNewJob(applicationForm: NgForm) {

  //   this.applyService.applyForNewJob(this.application).subscribe(
  //     (response: JobApplicant) => {

  //    //sweet alert
  //    Swal.fire({
  //     icon: "success",
  //     title: "Done",
  //     text: "We got your Message!  We Contact with you as soon as possible",
  //     showConfirmButton: false,
  //     timer: 2500
  //   });

  //   // ContactForm.reset();
  //   applicationForm.resetForm();
  //     },
  //             (error: HttpErrorResponse) => {

  //               console.log(error);

  //               Swal.fire({
  //                 icon: 'error',
  //                 title: 'Oops...',
  //                 text: 'Something went wrong! Please try again later.'
  //               }); }
  //   );
  // }

  // applicationDetails: JobApplicant[] = [];

  // // table colomn names
  // displayedColumns: string[] = ['ID', 'Name', 'Address', 'Email', 'Phone', 'Position', 'Experience', 'CV Download'];

  // public getAllApplication() {

  //   this.applyService.getAllApplication().subscribe(
  //     (response: JobApplicant[]) => {
  //       console.log(response);

  //       this.applicationDetails = response;

  //     }, (error: HttpErrorResponse) => { console.log(error); }

  //   );
  // }
}
