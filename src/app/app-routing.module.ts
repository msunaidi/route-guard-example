import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { AddCharacterComponent } from './features/add-character/add-character.component';
import { CharactersComponent } from './features/characters/characters.component';

import { HeroComponent } from './home/hero/hero.component';

const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
    //loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { component: LoginComponent, path: 'login' },
  {
    component: CharactersComponent,
    path: 'characters',
    canActivate: [AuthGuard],
  },
  {
    component: AddCharacterComponent,
    path: 'add-character',
    canActivate: [AuthGuard],
    data: { role: ['admin', 'superadmin'] },
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
