import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AlertController } from 'ionic-angular';

import { SignUpPage } from '../sign-up/sign-up';
import { LoginFormPage } from '../login-form/login-form';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  doSignUp(){
  	this.navCtrl.push(SignUpPage);
  }
  goLoginForm() {
	  this.navCtrl.push(LoginFormPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
