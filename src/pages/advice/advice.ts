import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {AdviceModalPage} from '../advice-modal/advice-modal';
import {AdviceTermsPage} from '../advice-terms/advice-terms';

/**
 * Generated class for the AdvicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advice',
  templateUrl: 'advice.html',
})
export class AdvicePage {

  constructor(private modalController : ModalController ,public navCtrl: NavController, public navParams: NavParams) {
  }

  openModal(){
    let openModal = this.modalController.create(AdviceModalPage);
    openModal.present();
  }

  openModalTerms(){
    let openModalTerms = this.modalController.create(AdviceTermsPage);
    openModalTerms.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvicePage');
  }

  goBack(){
        this.navCtrl.pop();
  }

}
