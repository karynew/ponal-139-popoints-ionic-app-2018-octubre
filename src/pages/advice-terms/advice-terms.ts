import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdviceTermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-advice-terms',
  templateUrl: 'advice-terms.html',
})
export class AdviceTermsPage {

  constructor( public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdviceTermsPage');
  }
   closeModal(){
  	this.navCtrl.pop();
  }

}
