import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KickBokingPage } from './kick-boking.page';

const routes: Routes = [
  {
    path: '',
    component: KickBokingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KickBokingPage]
})
export class KickBokingPageModule {}
