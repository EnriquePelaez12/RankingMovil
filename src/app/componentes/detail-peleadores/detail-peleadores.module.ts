import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailPeleadoresPage } from './detail-peleadores.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPeleadoresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailPeleadoresPage]
})
export class DetailPeleadoresPageModule {}
