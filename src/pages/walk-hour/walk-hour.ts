import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DogServiceProvider } from '../../providers/dog-service/dog-service';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the WalkHourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-walk-hour',
  templateUrl: 'walk-hour.html',
})
export class WalkHourPage {

  walkData = {
    "walkHourId": 0,
    "numberWalk": 0,
    "morningHour": "",
    "nightHour": "",
    "dogsDogId": 1,
    "afternoonHour": ""
  }

  //https://medium.com/@sunilksamanta/mysql-like-auto-increment-numeric-primary-key-for-loopback-2cdb477cdcf1

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public dogService: DogServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalkHourPage');
  }
  goToMenu(){
    this.dogService.postWalkHour(this.walkData)
    .subscribe(data => {
      console.log(data['_body']);
    }, error => {
      console.log(error);
    });
    let alert = this.alertCtrl.create({
      cssClass: 'walk-alert',
      title: '¡Felicidades!',
      subTitle: 'Tu perro ha sido registrado con exito',
      buttons: [
        {
          cssClass: 'cancel-button',
          text: 'Registra otra mascota',
          handler: data => {
  					this.navCtrl.setRoot('DogSignupPage');
  				}
        },
        {
          cssClass: 'login-button',
          text: 'Ya puedes empezar',
          handler: data => {
  					this.navCtrl.setRoot('MenuPage');
  				}
        }
      ]
    });
    alert.present();
  }

}
