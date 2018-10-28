import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { HttpClientModule } from '@angular/common/http';
//import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
//import { DogSignupPage } from '../pages/dog-signup/dog-signup';
import { CardsPage } from '../pages/cards/cards';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ListProductPage } from '../pages/list-product/list-product';
import { Tab2Page } from '../pages/tab2/tab2';
import { ProductDetailPage } from '../pages/product-detail/product-detail';


import { AdviceTermsPage } from '../pages/advice-terms/advice-terms';
import { AdviceModalPage } from '../pages/advice-modal/advice-modal';
import { DogServiceProvider } from '../providers/dog-service/dog-service';
import { OwnerServiceProvider } from '../providers/owner-service/owner-service';

@NgModule({
  declarations: [
    MyApp,
    //DogSignupPage,
    CardsPage,
    SignUpPage,
     AdviceModalPage,
     AdviceTermsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
    //IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //DogSignupPage,
    CardsPage,
    SignUpPage,
     AdviceModalPage,
     AdviceTermsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DogServiceProvider,
    OwnerServiceProvider
  ]
})
export class AppModule {}
