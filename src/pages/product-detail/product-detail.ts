import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';





/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Tu código para canjear es',
      subTitle: '5464484686868',
      buttons: [
        
        {
          cssClass: 'login-button',
          text: 'Ok',
            handler: data => {
              this.navCtrl.setRoot('Tab2Page');
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

 goBack(){
        this.navCtrl.pop();
  } 


}
