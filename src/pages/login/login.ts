import { AuthService } from './../../service/auth.service';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentialsForm: FormGroup;
  account : Account;
 
  constructor(private AuthService:AuthService,private formBuilder: FormBuilder
    ) {
      this.credentialsForm = this.formBuilder.group({
        login: [''],
        password: [''],
      
      });
  }

  ionViewDidLoad() {
  }

  onSignIn() {
    this.AuthService.login(this.credentialsForm.controls['login'].value,this.credentialsForm.controls['password'].value);

  }



}
