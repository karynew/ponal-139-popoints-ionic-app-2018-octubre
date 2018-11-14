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

   premios:any=[];
 

ionViewDidLoad() {
    console.log('ionViewDidLoad ListProductPage');
    this.awardService.getAward()
   
    .subscribe((award)=>{
      console.log(award);
      this.premios = award;
      
           },
    (error)=> {
      console.error(error);
    })
    
  }

  goToProductDetail(){
    this.navCtrl.setRoot('ProductDetailPage');
  }

}
