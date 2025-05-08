import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxMaskModule } from 'ngx-mask'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from "@angular/common/http"

import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgxMaskModule.forRoot({dropSpecialCharacters: false}),
    ReactiveFormsModule, HttpClientModule, FormsModule, IonicStorageModule.forRoot({
      name: "DataBase"
    })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})


export class AppModule {}
