import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Event } from './../../interface/Event';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the DisplayEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display-event',
  templateUrl: 'display-event.html',
})
export class DisplayEventPage {
  events = new Array<Event>();
  ifData:boolean = false;
  role_id:string;
  apiKey:string;
  user_id:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private apiProvider : ApiProvider,private iab:InAppBrowser) {
  }

  isLink(message){
    return (message.includes('https://'));
  }
  goInternet(response){
    this.iab.create(response);
  }


  fillData(){
    this.apiProvider.getEvent().subscribe(data => {
      if(data['error']=='SUCCESS'){
        this.events = data['data'];

        if(this.events.length!=0){
          this.ifData = true;
        }
        this.events.map((oneEvent,i)=>{
          
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
        this.fillData();
      }
    })


  }
}
