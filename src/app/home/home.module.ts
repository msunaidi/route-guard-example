import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [HeaderComponent, HeroComponent],
  imports: [CommonModule, NgbModule, RouterModule],
  exports: [HeaderComponent, HeroComponent],
})
export class HomeModule {}
