import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the CameraViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera-view',
  templateUrl: 'camera-view.html',
})
export class CameraViewPage {
  dogPhoto: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraViewPage');
  }

  takePhoto() {
	  const options: CameraOptions = {
	  	quality: 100,
	  	destinationType: this.camera.DestinationType.FILE_URI,
			encodingType: this.camera.EncodingType.JPEG,
			targetWidth: 1000,
      targetHeight: 1000,
	  	mediaType: this.camera.MediaType.PICTURE
	  }
	  this.camera.getPicture(options).then((imageData) => {
	  	this.dogPhoto = `data:image/jpeg;base64,${imageData}`;
	  }, (err) => {
			//console.error( error );
	  });
  }
}
