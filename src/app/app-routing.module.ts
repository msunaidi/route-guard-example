import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AddCharacterComponent } from './features/add-character/add-character.component';
import { CharactersComponent } from './features/characters/characters.component';

import { HeroComponent } from './home/hero/hero.component';

const routes: Routes = [
  { component: HeroComponent, path: '' },
  { component: LoginComponent, path: 'login' },
  { component: CharactersComponent, path: 'characters' },
  { component: AddCharacterComponent, path: 'add-character' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
