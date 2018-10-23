import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImgDetailPage } from './img-detail';

@NgModule({
  declarations: [
    ImgDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ImgDetailPage),
  ],
})
export class ImgDetailPageModule {}
