import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { DocumentsPage } from './../pages/documents/documents';
import { EquipementPage } from './../pages/equipement/equipement';
import { FlowItemPage } from './../pages/flow-item/flow-item';
import { FlowPage } from './../pages/flow/flow';
import { LoginPage } from './../pages/login/login';
import { ProjetPage } from './../pages/projet/projet';
import { SuiviPage } from './../pages/suivi/suivi';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    ProjetPage,
    EquipementPage,
    FlowPage,
    SuiviPage,
    DocumentsPage,
    FlowItemPage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProjetPage,
    EquipementPage,
    FlowPage,
    SuiviPage,
    DocumentsPage,
    FlowItemPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
