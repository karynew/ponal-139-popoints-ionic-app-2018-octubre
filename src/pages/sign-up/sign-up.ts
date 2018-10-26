import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OwnerServiceProvider } from '../../providers/owner-service/owner-service';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  dataPeople = {
    "firstName": "",
    "lastName": "",
    "emailUser": "",
    "passwordUser": "",
    "peopleId": 2,
    "identificationNumber": 0
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public peopleService: OwnerServiceProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  createPeople(){
    this.peopleService.postPeople(this.dataPeople)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);
      });
    let alert = this.alertCtrl.create({
      title: 'Gracias',
      subTitle: 'Te has registrado exitosamente',
      buttons: [
        {
          text: 'Registra tu mascota',
          handler: data => {
  					this.navCtrl.setRoot('DogSignupPage');
  				}
        }
      ]
    });
    alert.present();
  }

}
