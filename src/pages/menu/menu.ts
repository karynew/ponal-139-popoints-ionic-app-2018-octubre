import { NotificationsPage } from './../notifications/notifications';
import { SpecialPage } from './../special/special';
import { Tab4Page } from './../tab4/tab4';
import { Tab3Page } from './../tab3/tab3';
import { Tab2Page } from './../tab2/tab2';
import { Tab1Page } from './../tab1/tab1';
import { TabsPage } from './../tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';

//Authentication
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../../firebase.config';
import { AuthService } from '../../services/auth.service';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
 
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = 'TabsPage';
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    //{ title: 'Home', pageName: 'SpecialPage', icon: 'home' },
    { title: 'Niveles', pageName: 'LevelsPage', icon: 'nivel' },
    { title: 'Consejos', pageName: 'AdvicePage',  icon: 'tips' },
    //{ title: 'Retos', pageName: 'Tab1Page',  icon: 'retos' },
    //{ title: 'Notificaciones', pageName: 'NotificationsPage',icon:'notificaciones' },
    //{ title: 'Salir', pageName: 'LoginPage', icon: 'salir' },
  ];
 
  constructor(
    public navCtrl: NavController,
    private auth: AuthService
    ) { }
 
  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.navCtrl.push(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

  login() {
		//this.menu.close();
		this.auth.signOut();
		this.navCtrl.setRoot('LoginFormPage');
	}
	
	logout() {
		//this.menu.close();
		this.auth.signOut();
		this.navCtrl.setRoot('LoginPage');
	}


 
}