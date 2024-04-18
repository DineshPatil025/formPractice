import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @ViewChild('logInForm') logInForm !: ElementRef
  // logInForm!: NgForm;

  constructor() { }

  ngOnInit(): void {

  }

  onLogInSubmit(logInForm: NgForm) {
    console.log(logInForm.value);
    console.log(logInForm);
    logInForm.reset();

  }
}
