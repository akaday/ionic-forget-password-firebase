import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-forget-password-firebase',
  templateUrl: 'forget-password-firebase.html',
})
export class ForgetPasswordFirebasePage {

  Login = {email : null};
  isLoading = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    public toastCtrl:ToastController
  ) {
  }

  validated(){
    let mailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
    if(mailRE.test(this.Login.email)) {
      return true;
    }
    return false;
  }

  sendRequest(){
    this.isLoading = true;
    this.afAuth.auth.fetchProvidersForEmail(this.Login.email)
    .then(data=>{
      console.log(data);
      if(data){
        this.afAuth.auth.sendPasswordResetEmail(this.Login.email)
        .then(data=>{
          console.log(data);
          this.showToast("Check Your Email!!");
        },
        err => this.toastError(err)
        );
      }
    },
    err => this.toastError(err)
    );
  }

  showToast(msg){
    let toast = this.toastCtrl.create({
       message : msg,
       position : 'top',
       duration : 2000
     });
     toast.present();
  }

  toastError(msg){
     let toast = this.toastCtrl.create({
       message : msg,
       position : 'top',
       cssClass : 'toastError',
       duration : 3000
     });
    
     toast.present();
  }

}
