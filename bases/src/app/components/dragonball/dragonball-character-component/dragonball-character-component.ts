import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character';

@Component({
  selector: 'dragonball-character-component',
  imports: [],
  templateUrl: './dragonball-character-component.html',
  styleUrl: './dragonball-character-component.css',
})
export class DragonballCharacterComponent
{
  characters = input.required<Character[]>();
  listName = input<string>();
}
