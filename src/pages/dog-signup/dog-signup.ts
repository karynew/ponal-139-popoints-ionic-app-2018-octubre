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

  /* levelData:any = {
    id: 0,
    number: ""
  }; */

  peopleData:any = {
    id: 0
  }
  
  postData = {
    //"dogId": 2,
    "nameDog": "",
    "pictureDog": "",
    "weigthDog": 0,
    "sizeDog": "",
    "birthayDog": "",
    "popointsDogs": 0,
    "numberPlate": "",
    "levelIdlevel": 1,
    "numberLevel": "GUAU",
    "age": 0,
    "peopleId": 4
    /* "codeDog": "uno",*/
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public dogService: DogServiceProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DogSignupPage');
    this.dogService.getLevelDogs()
    .subscribe(getLevel => {
      console.log(getLevel[0].numberLevel);
      //this.levelData.id = getLevel[0].idlevel;
      //this.levelData.number = getLevel[0].numberLevel;
    }, error => {
      console.log(error);
    });

    this.dogService.getPeople()
    .subscribe(getPeople => {
      this.peopleData = getPeople[4].peopleId;
    }, error => {
      console.log(error);
    });
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
