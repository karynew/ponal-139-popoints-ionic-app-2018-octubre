import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DogServiceProvider } from '../../providers/dog-service/dog-service';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',

})
export class Tab1Page {
  dogPhoto: string = "";
	image: object = {
		"result": {}
  }
  dogs: any = {};
  id: any;

	nombre_perro:string;
	ciudad_pais:string;
	nivel:string;
	Porcentaje_higiene:string;
	type_higiene:string;
	Porcentaje_convivencia:string;
	type_convivencia:string;
	Porcentaje_popularidad:string;
  type_popularidad:string;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public camera: Camera, 
		public dogService: DogServiceProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
    this.dogService.getDogs()
    .subscribe((dogData)=>{
      this.dogs = dogData[2];
    },
    (error)=>{
      console.error(error);
    })

    this.nombre_perro='LUCAS';
    this.ciudad_pais='Bogota-Colombia';
    this.nivel='MASTER GUAU';
    this.Porcentaje_higiene='10%';
    this.type_higiene='Higiene';
    this.Porcentaje_convivencia='10%';
    this.type_convivencia='Conviviencia';
    this.Porcentaje_popularidad='10%';
    this.type_popularidad='Popularidad';
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
          if (res) {
      
            this.dogService.getPopoints(this.id).subscribe(res1 => {
              const dataUpdate: any = {
                "popointsId": res1.popointsId,
                "numberPopoints": parseInt(res1.numberPopoints + 10),
                "datePicture": new Date(),
                "evidencePicture": res.result.files.container[0].name,
                //"dogId": res.dogId
                "dogId": 3
              };
              this.dogService.updateDog(dataUpdate).subscribe(
                res => {
                  console.log(res)
                },
                err => {
                  console.log()
                }
              )
            });
          }
        },
        err => {
          console.log("Error occured");
        }
      );

	  }, (err) => {
			//console.error( error );
	  });
	}

  goPhoto() {
  	this.navCtrl.setRoot('CameraViewPage');
  }

  goBack(){
    this.navCtrl.pop();
  }
}
