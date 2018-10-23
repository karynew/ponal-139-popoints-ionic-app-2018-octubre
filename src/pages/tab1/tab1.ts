import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
	nombre_perro:string;
	ciudad_pais:string;
	nivel:string;
	Porcentaje_higiene:string;
	type_higiene:string;
	Porcentaje_convivencia:string;
	type_convivencia:string;
	Porcentaje_popularidad:string;
	type_popularidad:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
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

  

}
