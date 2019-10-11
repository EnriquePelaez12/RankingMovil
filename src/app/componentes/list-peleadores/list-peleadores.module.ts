import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListPeleadoresPage } from './list-peleadores.page';

const routes: Routes = [
  {
    path: '',
    component: ListPeleadoresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListPeleadoresPage]
})
export class ListPeleadoresPageModule {}
