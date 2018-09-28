import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DogSignupPage } from './dog-signup';

@NgModule({
  declarations: [
    DogSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(DogSignupPage),
  ],
})
export class DogSignupPageModule {}
