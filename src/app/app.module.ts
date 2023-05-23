import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { RouteReuseStrategy } from '@angular/router';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { StatusBar } from '@ionic-native/status-bar/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';

import { AppRoutingModule } from '@app/app-routing.module';

import { FormsModule } from '@angular/forms';

import { Contacts } from '@ionic-native/contacts/ngx';

import { ContactServiceFile } from './services/contactService/contact.service';


@NgModule({

  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Contacts,
    ContactServiceFile,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }