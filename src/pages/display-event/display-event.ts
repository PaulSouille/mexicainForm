import { ExpandableComponent } from './../../components/expandable/expandable';
import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Event } from './../../interface/Event';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';


/**
 * Generated class for the DisplayEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export class ComponentModule {}

@IonicPage()
@Component({
  selector: 'page-display-event',
  templateUrl: 'display-event.html',
})

@NgModule({
  declarations: [
    DisplayEventPage,

  ],
  imports: [
    ExpandableComponent,
    IonicPageModule.forChild(DisplayEventPage),
  ],
})
export class DisplayEventPage {
  events = new Array<Event>();
  itemExpandHeight: number = 50;

  ifData:boolean = false;
  role_id:string;
  apiKey:string; 
  user_id:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private apiProvider : ApiProvider,private iab:InAppBrowser,private AlertControl:AlertController) {
  }
  setAlert(titleAlert,contentAlert){
    let alert = this.AlertControl.create({
      title: titleAlert,
      subTitle: contentAlert,
      buttons: ['Fermer']
    });
    alert.present();
  }
  isLink(message){
    return (message.includes('https://'));
  }
  goInternet(response){
    this.iab.create(response);
  }
  expandItem(item){
    this.events.map((listItem) => {

        if(item == listItem){
            listItem.expanded = !listItem.expanded;
        } else {
            listItem.expanded = false;
        }

        return listItem;

    });

}

  fillData(){
    this.apiProvider.getEvent().subscribe(data => {
      if(data['error']=='SUCCESS'){
        this.events = data['data'];

        if(this.events.length!=0){
          this.ifData = true;
        }
        this.events.map((oneEvent,i)=>{
          oneEvent.expanded = false;
          if(this.isLink(oneEvent.response)){
            oneEvent.isLink = true;
          }
          else{
            oneEvent.isLink=false;
          }
        })
      }

  });
  }
  ionViewDidLoad() { 
    this.user_id = localStorage.getItem('user_id');
    this.apiKey = localStorage.getItem('apiKey');
    this.role_id = localStorage.getItem('role_id');
    this.fillData();
}
  delete(id){
    this.apiProvider.deleteEvent(id,this.apiKey,this.user_id).subscribe(data=>{
      if(data['error']==="SUCCESS"){
        this.setAlert('Succès','Element supprimé.')
        this.fillData();
      }
    })


  }
  askDelete(id){
    this.apiProvider.askDelete(id).subscribe(data=>{
      if(data['error']==='SUCCESS'){
        this.setAlert('Succès','La demande à été effectuée.')
        this.fillData();
      }
    })
  }
  removeDelete(id){
    this.apiProvider.removeDelete(id).subscribe(data=>{
      if(data['error']==='SUCCESS'){
        this.setAlert('Succès','La demande à été supprimée.')
        this.fillData();
      }
    })
  }
}
