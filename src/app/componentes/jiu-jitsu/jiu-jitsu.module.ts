import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JiuJitsuPage } from './jiu-jitsu.page';

const routes: Routes = [
  {
    path: '',
    component: JiuJitsuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JiuJitsuPage]
})
export class JiuJitsuPageModule {}
