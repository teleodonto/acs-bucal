import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermoPage } from './termo.page';

const routes: Routes = [
  {
    path: '',
    component: TermoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermoPageRoutingModule {}
