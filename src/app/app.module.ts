import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from  '../pages/login/login';
import {RegistroPage} from  '../pages/registro/registro';
import {DetallePage} from  '../pages/detalle/detalle';
import {EditarPage} from  '../pages/editar/editar';
import {NuevoPage} from  '../pages/nuevo/nuevo';
import {AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';


  // Initialize Firebase
  const firebaseconfig = {
    apiKey: "AIzaSyBnR16PVqIURpgn-EskijXkCSHhIe3QUTg",
    authDomain: "prueba-f0037.firebaseapp.com",
    databaseURL: "https://prueba-f0037.firebaseio.com",
    projectId: "prueba-f0037",
    storageBucket: "prueba-f0037.appspot.com",
    messagingSenderId: "194946998359"
  };
 



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    DetallePage,
    EditarPage,
    NuevoPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseconfig)
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    DetallePage,
    EditarPage,
    NuevoPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
