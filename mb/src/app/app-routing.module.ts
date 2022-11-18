import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IsLoggedInGuard } from './auth/is-logged-in.guard';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'reservas',
    pathMatch: 'full',
  },
 {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'catalog',
    loadChildren: () => import('./catalog/catalog.module').then((m) => m.CatalogModule),
  },
  
    {
  path: 'reservas',
    loadChildren: () => import('./reservas/reservas.module').then((m) => m.ReservasModule),
  },
  // {
    // path: 'Home',
    //   loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    // },
  
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivateChild: [IsLoggedInGuard],
    canLoad: [IsLoggedInGuard],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },


];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
