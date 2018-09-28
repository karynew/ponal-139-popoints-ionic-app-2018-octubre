import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DogSignupPage } from '../dog-signup/dog-signup';
import { CardsPage } from '../cards/cards';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  turnPage(){
    this.navCtrl.push(DogSignupPage);
  }
  turnPageSet(){
    this.navCtrl.push(CardsPage);
  }

}
