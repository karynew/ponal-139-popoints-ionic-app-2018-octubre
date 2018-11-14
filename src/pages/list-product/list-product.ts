import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDetailPage } from '../product-detail/product-detail';
import { AwardServiceProvider } from '../../providers/award-service/award-service';
/**
 * Generated class for the ListProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-product',
  templateUrl: 'list-product.html',
})
export class ListProductPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public awardService: AwardServiceProvider) {
  }

<<<<<<< HEAD
   premios:any=[];
 
=======
 // premios= {};
  premios: any = [];
>>>>>>> 2f97e4168fb13236101d5c74898726f406788793

ionViewDidLoad() {
    console.log('ionViewDidLoad ListProductPage');
    this.awardService.getAward()
    .subscribe((award)=>{
      console.log(award);
      this.premios = award;
<<<<<<< HEAD
      
           },
=======
    },
>>>>>>> 2f97e4168fb13236101d5c74898726f406788793
    (error)=> {
      console.error(error);
    })
    
  }

  goToProductDetail(){
    this.navCtrl.setRoot('ProductDetailPage');
  }

}
