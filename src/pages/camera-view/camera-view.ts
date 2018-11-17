import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DogServiceProvider } from '../../providers/dog-service/dog-service';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

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
	dogPhoto: string = "";
	image: object = {
		"result": {}
	}

  constructor(
			public navCtrl: NavController, 
			public navParams: NavParams, 
			public camera: Camera, 
			public dogService: DogServiceProvider
		) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraViewPage');
  }

  takePhoto() {
	  const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE,
			saveToPhotoAlbum: true
		}
		
	  this.camera.getPicture(options).then((imageData) => {
			this.dogPhoto = `data:image/jpeg;base64,${imageData}`;

			this.dogService.postImage(imageData).subscribe(
				res => {
				console.log(res);
				},
				err => {
				console.log("Error occured");
				}
			);

	  }, (err) => {
			//console.error( error );
	  });
	}

}