import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListanimalsPage } from './listanimals';

@NgModule({
  declarations: [
    ListanimalsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListanimalsPage),
  ],
})
export class ListanimalsPageModule {}
