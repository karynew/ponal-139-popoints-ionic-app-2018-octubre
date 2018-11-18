import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImgDetailPage } from '../img-detail/img-detail';
import { PhotoAlbumProvider } from '../../providers/photo-album/photo-album';
/**
 * Generated class for the Tab3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab3',
  templateUrl: 'tab3.html',
})
export class Tab3Page {

  pictures: any = [];
	
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public photoAlbum: PhotoAlbumProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab3Page');
    this.photoAlbum.getPicture()
    .subscribe((picData)=>{
      this.pictures = picData;
    },
    (error)=>{
      console.error(error);
    })
  }

  goToimgDetail(){
    this.navCtrl.push('ImgDetailPage');
  }

  

}
