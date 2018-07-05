import { FlowItemPage } from './../flow-item/flow-item';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FlowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-flow',
  templateUrl: 'flow.html',
})
export class FlowPage {
  items = [1, 2, 3];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowPage');
  }

  itemSelected() {
    // console.log('ok');
    this.navCtrl.push(FlowItemPage);
  }
}
