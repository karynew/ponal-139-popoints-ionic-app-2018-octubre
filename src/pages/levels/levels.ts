import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LevelsServiceProvider } from '../../providers/levels-service/levels-service';

/**
 * Generated class for the LevelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-levels',
  templateUrl: 'levels.html',
})
export class LevelsPage {
  levels: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public levelsService: LevelsServiceProvider ) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad LevelsPage');
    this.levelsService.getLevels()
    .subscribe((category)=>{
      this.levels = category;
    },
    (error)=>{
      console.error(error);
    })
  }
  goBack(){
        this.navCtrl.pop();
  }

}
