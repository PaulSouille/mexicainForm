import { AlertTool } from './../tools/alert.tool';
import { AuthService } from './../service/auth.service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DisplayEventPage } from './../pages/display-event/display-event';
import { Vibration } from '@ionic-native/vibration';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdminPage } from '../pages/admin/admin';
import {LongPressModule} from 'ionic-long-press';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ExpandableComponent } from '../components/expandable/expandable';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DisplayEventPage,
    AdminPage,
    ExpandableComponent,


    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    LongPressModule,

    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DisplayEventPage,
    AdminPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    AuthService,
    BarcodeScanner,
    Vibration,
     InAppBrowser,
     AlertTool,
     LongPressModule

  ]
})
export class AppModule {}
