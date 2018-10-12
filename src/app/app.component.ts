import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { Storage } from '@ionic/storage';
// import { LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'IntroPage';
  loader: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    //this.presentLoading();

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      /*this.storage.get('introShown').then((result) => {
 
        if(result){
          this.rootPage = 'LoginPage';
          console.log("Charge Login");
        } else {
          this.rootPage = 'IntroPage';
          this.storage.set('introShown', true);
          console.log("Charge Intro page");
        }
 
        this.loader.dismiss();
 
      });*/
    });
  }
  /*presentLoading() {
 
    this.loader = this.loadingCtrl.create({
      content: "Authenticating..."
    });
 
    this.loader.present();
 
  }*/
}