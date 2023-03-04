import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { AddCharacterComponent } from './add-character/add-character.component';

@NgModule({
  declarations: [CharactersComponent, AddCharacterComponent],
  imports: [CommonModule],
})
export class FeaturesModule {}
