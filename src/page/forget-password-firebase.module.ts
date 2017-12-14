import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgetPasswordFirebasePage } from './forget-password-firebase';

@NgModule({
  declarations: [
    ForgetPasswordFirebasePage,
  ],
  imports: [
    IonicPageModule.forChild(ForgetPasswordFirebasePage),
  ],
})
export class ForgetPasswordFirebasePageModule {}
