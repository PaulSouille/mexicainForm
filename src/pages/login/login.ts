import { ApiProvider } from './../../providers/api/api';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import CryptoJS from 'crypto-js';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentialsForm: FormGroup;
  account : Account;
 
  constructor(public navCtrl: NavController,private events:Events, public navParams: NavParams,private alertCtrl:AlertController,private formBuilder: FormBuilder,private apiProvider: ApiProvider
    ) {
      this.credentialsForm = this.formBuilder.group({
        login: [''],
        password: [''],
      
      });
  }

  ionViewDidLoad() {
  }

  setAlert(titleAlert,contentAlert){
    let alert = this.alertCtrl.create({
      title: titleAlert,
      subTitle: contentAlert,
      buttons: ['Fermer']
    });
    alert.present();
  }
  onSignIn() {

      this.apiProvider.login(this.credentialsForm.controls['login'].value,CryptoJS.SHA256(this.credentialsForm.controls['password'].value).toString(CryptoJS.enc.Hex).toUpperCase()).subscribe(data => {
        if(data['error']=='ERROR_EMAIL'){
          this.setAlert('Attention','Email incorrect.')
        }
        else{
          if(data['error']=='ERROR_PASSWORD'){
            this.setAlert('Attention','Mot de passe incorrect')
          }
          else{
            if(data['error']=='SUCCESS'){
              localStorage.setItem("user_id", data.data.id);
              localStorage.setItem('role_id',data.data.role_id);
              localStorage.setItem('apiKey',data.data.apiKey);
              this.events.publish('user:changed', localStorage.getItem('role_id')); 
              this.navCtrl.setRoot(HomePage);
            }
          }
        }
 
      });
    
    
  }



}
