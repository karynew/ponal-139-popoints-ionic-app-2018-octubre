import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
//import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
//import { DogSignupPage } from '../pages/dog-signup/dog-signup';
import { CardsPage } from '../pages/cards/cards';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ListProductPage } from '../pages/list-product/list-product';
import { Tab2Page } from '../pages/tab2/tab2';
import { ProductDetailPage } from '../pages/product-detail/product-detail';

@NgModule({
  declarations: [
    MyApp,
    //DogSignupPage,
    CardsPage,
    SignUpPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //DogSignupPage,
    CardsPage,
    SignUpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
