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

 // premios= {};
  premios: any[]=[];
  premios1= {
            title: "",
            description: "",
            Num_Popoints:0,
            Quantity_Awards:0
  }
  premios2= {
    title: "",
    description: "",
    Num_Popoints:0,
    Quantity_Awards:0
}
premios3= {
  title: "",
  description: "",
  Num_Popoints:0,
  Quantity_Awards:0
}

ionViewDidLoad() {
    console.log('ionViewDidLoad ListProductPage');
    this.awardService.getAward()
   
    .subscribe((award)=>{
      //console.log(award[0].numPopoints);
      this.premios = award[''];
      
      /*this.premios1.title = award[1].titleAward;
      this.premios1.description= award[1].descriptionAward;
      this.premios1.Num_Popoints= award[1].numPopoints;
      this.premios1.Quantity_Awards= award[1].quantityAwardsAvailable;
      
      this.premios2.title = award[2].titleAward;
      this.premios2.description= award[2].descriptionAward;
      this.premios2.Num_Popoints= award[2].numPopoints;
      this.premios2.Quantity_Awards= award[2].quantityAwardsAvailable;
      
      this.premios3.title = award[3].titleAward;
      this.premios3.description= award[3].descriptionAward;
      this.premios3.Num_Popoints= award[3].numPopoints;
      this.premios3.Quantity_Awards= award[3].quantityAwardsAvailable;
      */
         },
    (error)=> {
      console.error(error);
    })
    
  }

  goToProductDetail(){
    this.navCtrl.setRoot('ProductDetailPage');
  }

}
