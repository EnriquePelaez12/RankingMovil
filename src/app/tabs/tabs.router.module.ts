import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'kick-boking',
        children: [
          {
            path: '',
            loadChildren: './componentes/kick-boking/kick-boking.module#KickBokingPageModule'
          }
        ]
      },
      {
        path: 'mma',
        children: [
          {
            path: '',
            loadChildren: './componentes/mma/mma.module#MmaPageModule'
          }
        ]
      },
      {
        path: 'jui-jitsu',
        children: [
          {
            path: '',
            loadChildren: './componentes/jiu-jitsu/jiu-jitsu.module#JiuJitsuPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/kick-boking',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/kick-boking',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
