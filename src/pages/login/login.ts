import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { SignUpPage } from '../sign-up/sign-up';
import { LoginFormPage } from '../login-form/login-form';

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
  	this.navCtrl.push(SignUpPage);
  }
  goLoginForm() {
	  this.navCtrl.push(LoginFormPage);
  }
  doLogin(){
  	let alert = this.alertCtrl.create({
  		title: 'Ingresa',
  		inputs: [
  			{
  				name: 'username',
  				placeholder: 'Nombre de usuario'
  			},
  			{
  				name: 'password',
  				placeholder: 'Contraseña',
  				type: 'password'
  			}
  		],
  		buttons: [
  			{  
				cssClass: 'cancel-button',
				text: 'Cancelar',
  				role: 'cancel',
  				handler: data => {
  					console.log('Cancel clicked');
  				}
  			},
  			{
				cssClass: 'login-button',
				text: 'Iniciar sesión',
  				handler: data => {
  					this.navCtrl.setRoot('MenuPage');
  				}

  			}
  		]
  	});
  	alert.present();
  }

  forgotPass(){
	let alert = this.alertCtrl.create({
		cssClass: 'remember-password',
		title: '¿Olvidaste tu contraseña?',
		inputs: [
			{
				name: 'Correo Electrónico',
				placeholder: 'Correo Electrónico'
			}
		],
		buttons: [
			{
				cssClass: 'cancel-button',
				text: 'Cancelar',
				role: 'cancel',
				handler: data => {
					console.log('Cancel clicked');
				}
			},
			{
				cssClass: 'login-button',
				text: 'Cambiar contraseña',
				handler: data => {
					console.log('Contraseña enviada');
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
