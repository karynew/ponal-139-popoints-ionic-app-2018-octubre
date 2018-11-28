import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { CardsPage } from '../pages/cards/cards';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { LoginFormPage } from '../pages/login-form/login-form';
import { ListProductPage } from '../pages/list-product/list-product';
import { Tab2Page } from '../pages/tab2/tab2';
import { ProductDetailPage } from '../pages/product-detail/product-detail';


import { AdviceTermsPage } from '../pages/advice-terms/advice-terms';
import { AdviceModalPage } from '../pages/advice-modal/advice-modal';
import { DogServiceProvider } from '../providers/dog-service/dog-service';
import { OwnerServiceProvider } from '../providers/owner-service/owner-service';
import { AwardServiceProvider } from '../providers/award-service/award-service';
import { LevelsServiceProvider } from '../providers/levels-service/levels-service';
import { PhotoAlbumProvider } from '../providers/photo-album/photo-album';

//Authentication
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../firebase.config';

@NgModule({
  declarations: [
    MyApp,
    CardsPage,
    SignUpPage,
    AdviceModalPage,
    AdviceTermsPage,
    LoginFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig.fire)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
    OwnerServiceProvider,
    AwardServiceProvider,
    LevelsServiceProvider,
    PhotoAlbumProvider,
    AngularFireAuth
  ]
})
export class AppModule {}
