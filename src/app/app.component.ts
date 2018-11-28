import { AuthService } from './../service/auth.service';
import { DisplayEventPage } from './../pages/display-event/display-event';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from './../pages/login/login';
import { HomePage } from '../pages/home/home';
import { Injectable } from '@angular/core';

@Component({
  templateUrl: 'app.html'
})
@Injectable()
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any =LoginPage;
  user_id:string = "1";
  pages: Array<{title: string, component: any}>;

  
  constructor(public platform: Platform,private events:Events, public statusBar: StatusBar, public splashScreen: SplashScreen,public Auth : AuthService) {
    this.initializeApp();

      this.pages = [
        { title: 'Accueil', component: HomePage },
        {title:"Les évènements",component:DisplayEventPage}
      ];
 

      this.events.subscribe('user:changed', user_id => {
        this.user_id = user_id; 
        if(this.user_id == "2"){
          this.pages = [
            { title: 'Accueil', component: HomePage },
            {title:"Les évènements",component:DisplayEventPage}
          ];
        }
        else{
          this.pages = [
            { title: 'Accueil', component: HomePage },
            {title:"Les évènements",component:DisplayEventPage},
          ];
        }

     });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}