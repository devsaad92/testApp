import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform } from 'ionic-angular';

import { DocumentsPage } from './../pages/documents/documents';
import { EquipementPage } from './../pages/equipement/equipement';
import { FlowPage } from './../pages/flow/flow';
import { ProjetPage } from './../pages/projet/projet';
import { SuiviPage } from './../pages/suivi/suivi';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ProjetPage;

  pages: Array<{title: string, component: any, icon?: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Projet', component: ProjetPage, icon: 'archive' },
      { title: 'Equipement', component: EquipementPage, icon:'md-build' },
      { title: 'Flow', component: FlowPage, icon:'md-send' },
      { title: 'Suivi', component: SuiviPage, icon:'md-flag' },
      { title: 'Documents', component: DocumentsPage, icon:'md-cart' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
