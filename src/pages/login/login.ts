import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { SignUpPage } from '../sign-up/sign-up';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  doSignUp(){
  	//this.navCtrl.setRoot('MenuPage');
  	this.navCtrl.push(SignUpPage);
  }
  doLogin(){
  	let alert = this.alertCtrl.create({
  		title: 'Ingresa',
  		inputs: [
  			{
  				name: 'username',
  				placeholder: 'Username'
  			},
  			{
  				name: 'password',
  				placeholder: 'Password',
  				type: 'password'
  			}
  		],
  		buttons: [
  			{
  				text: 'Cancel',
  				role: 'cancel',
  				handler: data => {
  					console.log('Cancel clicked');
  				}
  			},
  			{
  				text: 'Login',
  				handler: data => {
  					this.navCtrl.setRoot('MenuPage');
  					// if (User.isValid(data.username, data.password)) {
  					// 	console.log('Loged In');
  					// 	this.navCtrl.setRoot('MenuPage');
  					// } else {
  					// 	return false;
  					// }
  				}

  			}
  		]
  	});
  	alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
