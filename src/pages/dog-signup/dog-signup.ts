import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DogServiceProvider } from '../../providers/dog-service/dog-service';

//import { CameraViewPage } from '../camera-view/camera-view';

/**
 * Generated class for the DogSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dog-signup',
  templateUrl: 'dog-signup.html',
})
export class DogSignupPage {

  postData = {
    "dogId": 1,
    "nameDog": "",
    "pictureDog": "",
    "weigthDog": 0,
    "sizeDog": "",
    "birthayDog": "",
    "popointsDogs": 0,
    "numberPlate": "",
    /* "codeDog": "uno",
    "levelIdlevel": 1,
    "numberLevel": "uno" */
  }

  dataTest = this.dogService.getLevelDogs()
  .subscribe(dataLevel => {
    console.log(dataLevel[0].numberLevel);
  }, error => {
    console.log(error);
  });

  constructor(public navCtrl: NavController, public navParams: NavParams, public dogService: DogServiceProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DogSignupPage');
  }

  goPhoto() {
  	this.navCtrl.setRoot('CameraViewPage');
  }

  createDog(){
    this.dogService.postDogs(this.postData)
      .subscribe(data => {
        console.log(data['_body']);
        this.navCtrl.setRoot('WalkHourPage');
      }, error => {
        console.log(error);
      });
  }

}
