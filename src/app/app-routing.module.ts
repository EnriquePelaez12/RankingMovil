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
  { path: 'detail-alumno/:id', loadChildren: './componentes/detail-alumno/detail-alumno.module#DetailAlumnoPageModule' },
  { path: 'detail-alumno', loadChildren: './componentes/detail-alumno/detail-alumno.module#DetailAlumnoPageModule' },
  { path: 'list-peleadores', loadChildren: './componentes/list-peleadores/list-peleadores.module#ListPeleadoresPageModule' },
  { path: 'detail/:id', loadChildren: './componentes/detail-peleadores/detail-peleadores.module#DetailPeleadoresPageModule' },
  { path: 'detail', loadChildren: './componentes/detail-peleadores/detail-peleadores.module#DetailPeleadoresPageModule' },
  { path: 'modal-alumno/:id', loadChildren: './componentes/modal-alumno/modal-alumno.module#ModalAlumnoPageModule' },
  { path: 'modal-alumno', loadChildren: './componentes/modal-alumno/modal-alumno.module#ModalAlumnoPageModule' },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
