import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
	gallery :any =  [
	{

		"date": "Mon Oct 22 10 2018  10:00:00 GTM+ 0700 (ICT)",
		"images": [
		{
			"src" : "././assets/imgs/img.jpg",
			"date":  "Mon Oct 22 10 2018  10:00:00 GTM+ 0700 (ICT)",
			"location":""
		},
		{
			"src" : "././assets/imgs/img.jpg",
			"date":  "Mon Oct 22 10 2018  10:00:00 GTM+ 0700 (ICT)",
			"location":""
		},
		{
			"src" : "././assets/imgs/img.jpg",
			"date":  "Mon Oct 22 10 2018  10:00:00 GTM+ 0700 (ICT)",
			"location":""
		},
		{
			"src" : "././assets/imgs/img.jpg",
			"date":  "Mon Oct 22 10 2018  10:00:00 GTM+ 0700 (ICT)",
			"location":""
		},
		{
			"src" : "././assets/imgs/img.jpg",
			"date":  "Mon Oct 22 10 2018  10:00:00 GTM+ 0700 (ICT)",
			"location":""
		},
		{
			"src" : "././assets/imgs/img.jpg",
			"date":  "Mon Oct 22 10 2018  10:00:00 GTM+ 0700 (ICT)",
			"location":""
		},
		{
			"src" : "././assets/imgs/img.jpg",
			"date":  "Mon Oct 22 10 2018  10:00:00 GTM+ 0700 (ICT)",
			"location":""
		},
		{
			"src" : "././assets/imgs/img.jpg",
			"date":  "Mon Oct 22 10 2018  10:00:00 GTM+ 0700 (ICT)",
			"location":""
		},
		{
			"src" : "././assets/imgs/img.jpg",
			"date":  "Mon Oct 22 10 2018  10:00:00 GTM+ 0700 (ICT)",
			"location":""
		},
		{
			"src" : "././assets/imgs/img.jpg",
			"date":  "Mon Oct 22 10 2018  10:00:00 GTM+ 0700 (ICT)",
			"location":""
		}

		]

	}
	]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab3Page');
  }

}
