import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  credentialsForm: FormGroup;


  constructor(public navCtrl: NavController,private formBuilder: FormBuilder,private alertCtrl : AlertController,private apiProvider: ApiProvider) 
  {

    this.credentialsForm = this.formBuilder.group({
      event: [''],
      response: [''],
    
    });
   }
   setAlert(titleAlert,contentAlert){
    let alert = this.alertCtrl.create({
      title: titleAlert,
      subTitle: contentAlert,
      buttons: ['Fermer']
    });
    alert.present();
  }
  addEvent() {
      this.apiProvider.addEvent(this.credentialsForm.controls['event'].value,this.credentialsForm.controls['response'].value,localStorage.getItem('user_id')).subscribe(data => {
        if(data['error']=='ERROR_PARAM'){
          this.setAlert('Attention','Remplissez les champs.')
        }
        else{
          if(data['error']=='ERROR_ALREADY'){
            this.setAlert('Attention','Cet évènement existe déjà.');
          }
          
          else{
            if(data['error']=='ERROR'){
              this.setAlert('Attention','Une erreur est survenue.');
              }
              else{
                if(data['error']=='SUCCESS'){
                  this.credentialsForm.reset();
                  this.setAlert('Succès','L\'évènement a été ajouté avec succès.');
                  }
              }
          }
        }
      });
    
    
  }
}
