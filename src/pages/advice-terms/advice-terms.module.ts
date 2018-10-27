import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdviceTermsPage } from './advice-terms';

@NgModule({
  declarations: [
    AdviceTermsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdviceTermsPage),
  ],
})
export class AdviceTermsPageModule {}
