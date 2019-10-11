import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule' },
  { path: 'alumno', loadChildren: './componentes/alumno/alumno.module#AlumnoPageModule' },
  { path: 'list-peleadores', loadChildren: './componentes/list-peleadores/list-peleadores.module#ListPeleadoresPageModule' },
  { path: 'detail-peleadores', loadChildren: './componentes/detail-peleadores/detail-peleadores.module#DetailPeleadoresPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
