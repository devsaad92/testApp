import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProjetPage } from './../projet/projet';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }

  login() {
    this.navCtrl.setRoot(ProjetPage);
  }

}
