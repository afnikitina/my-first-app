import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') userForm: NgForm;
  profile = {
    prId: '',
    prFirstName: '',
    prLastName: '',
    prEmail: '',
    prPhone: ''
  }
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.profile.prFirstName = this.userForm.value.firstname;
    this.profile.prLastName = this.userForm.value.lastname;
    this.profile.prEmail = this.userForm.value.email;
    this.profile.prPhone = this.userForm.value.phone;
    this.userForm.reset();

    console.log("Your Name: " + this.profile.prFirstName + " " + this.profile.prLastName);
    console.log("Your email: " + this.profile.prEmail);
    console.log("Your phone: " + this.profile.prPhone);
  }
}
