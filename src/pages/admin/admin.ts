import { LongPressModule } from 'ionic-long-press';
import { User } from './../../interface/User';
import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  users = new Array<User>();
  ifData:boolean = false;
  
  constructor(public navCtrl: NavController,private LongPressModule : LongPressModule, private apiProvider : ApiProvider,public navParams: NavParams,private AlertControl : AlertController) {
  }
  setAlert(titleAlert,contentAlert){
    let alert = this.AlertControl.create({
      title: titleAlert,
      subTitle: contentAlert,
      buttons: ['Fermer']
    });
    alert.present();
  }
  pressed(){
    console.log('pressed');
  }
  active(){
    console.log('active');
  }
  fillData(){
    this.apiProvider.getUsers().subscribe(data => {
      if(data['error']=='SUCCESS'){
        this.users = data['data'];

        if(this.users.length!=0){
          this.ifData = true;
        }
      }

  });
  }

  ionViewDidLoad() {
    this.fillData();
  }
  enableUser(id){
    this.apiProvider.enableUser(id).subscribe(data=>{
      if(data['error']==='SUCCESS'){
        this.setAlert('Succès','L\'utilisateur à été désactivé.')
        this.fillData();
      }
    })
  }
  disableUser(id){
    this.apiProvider.disableUser(id).subscribe(data=>{
      if(data['error']==='SUCCESS'){
        this.setAlert('Attention','L\'Utilisateur à été désactivé')
        this.fillData();
      }
    })
  }
}
