import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  jobApplicationForm: FormGroup;
  selectedFile: File = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.jobApplicationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  submitApplication() {
    const formData: FormData = new FormData();
    formData.append('name', this.jobApplicationForm.get('name').value);
    formData.append('email', this.jobApplicationForm.get('email').value);
    formData.append('phone', this.jobApplicationForm.get('phone').value);
    formData.append('resume', this.selectedFile, this.selectedFile.name);

    this.http.post('http://localhost:8080/api/apply', formData)
      .subscribe(response => {
        console.log('Application submitted successfully!', response);
      }, error => {
        console.error('Error submitting application:', error);
      });
  }
}