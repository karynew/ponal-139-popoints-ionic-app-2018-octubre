import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdviceModalPage } from './advice-modal';

@NgModule({
  declarations: [
    AdviceModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AdviceModalPage),
  ],
})
export class AdviceModalPageModule {}
