import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'add-cliente',
    loadChildren: () => import('./pages/add-cliente/add-cliente.module').then( m => m.AddClientePageModule)
  },
  {
    path: 'mostrar-cliente',
    loadChildren: () => import('./pages/mostrar-cliente/mostrar-cliente.module').then( m => m.MostrarClientePageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./pages/clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'add-cliente/:id/:nome/:telefone/:email',
    loadChildren: () => import('./pages/add-cliente/add-cliente.module').then( m => m.AddClientePageModule)
  },
<<<<<<< HEAD
  {
    path: 'mostrar-cliente/:id/:nome/:telefone/:email',
    loadChildren: () => import('./pages/mostrar-cliente/mostrar-cliente.module').then( m => m.MostrarClientePageModule)
  },
=======
  
>>>>>>> 80c87e1b47ae7045cca3c54cd109f64032e5b8fe
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
