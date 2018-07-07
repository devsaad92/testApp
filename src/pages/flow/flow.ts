import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FlowItemPage } from './../flow-item/flow-item';

@Component({
  selector: 'page-flow',
  templateUrl: 'flow.html',
})
export class FlowPage {
  items = [1, 2, 3];

  constructor(public navCtrl: NavController) {
  }

  itemSelected() {
    // console.log('ok');
    this.navCtrl.push(FlowItemPage);
  }
}
