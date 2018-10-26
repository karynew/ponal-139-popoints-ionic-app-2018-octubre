import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WalkHourPage } from './walk-hour';

@NgModule({
  declarations: [
    WalkHourPage,
  ],
  imports: [
    IonicPageModule.forChild(WalkHourPage),
  ],
})
export class WalkHourPageModule {}
