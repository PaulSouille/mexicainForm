import { LoginPage } from './../pages/login/login';
import { AlertTool } from './../tools/alert.tool';
import { HomePage } from './../pages/home/home';
import  CryptoJS  from 'crypto-js';
import { ApiProvider } from './../providers/api/api';
import { Injectable } from '@angular/core';
import { Events, App, AlertController } from 'ionic-angular';
@Injectable()
export class AuthService {

  constructor(
    private ApiProvider:ApiProvider,
    private events:Events,
    private AlertTool:AlertTool,
    public App:App,
    private AlertController : AlertController
  ) {

  }
  setAlert(titleAlert,contentAlert){
    let alert = this.AlertController.create({
      title: titleAlert,
      subTitle: contentAlert,
      buttons: ['Fermer']
    });
    alert.present();
  }
  login(login,password):any {
    this.ApiProvider.login(login,CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex).toUpperCase()).subscribe(data => {
        if(data['error']=='ERROR_EMAIL'){
            
            this.setAlert('Attention','Email incorrect.');
          }
          else{
            if(data['error']=='ERROR_PASSWORD'){
              this.setAlert('Attention','Mot de passe incorrect')
            }
            else{
              if(data.data.isActive){
                if(data['error']=='SUCCESS'){
                  localStorage.setItem("user_id", data.data.id);
                  localStorage.setItem('role_id',data.data.role_id);
                  localStorage.setItem('apiKey',data.data.apiKey);
                  this.events.publish('user:changed', localStorage.getItem('role_id')); 
                  this.App.getActiveNav().setRoot(HomePage); 

                }
              }
              else{
                this.setAlert('Attention','Votre compte à été désactivé.');
              }
            }
          }
      });
      return false;
  }

  logout() {
    localStorage.clear();
    document.location.href = 'index.html';
}
}
