import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermoPageRoutingModule } from './termo-routing.module';

import { TermoPage } from './termo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermoPageRoutingModule
  ],
  declarations: [TermoPage]
})
export class TermoPageModule {}
