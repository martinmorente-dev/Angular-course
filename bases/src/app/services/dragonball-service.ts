import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character';

const localFromLocalStorage = (): Character[] => {

  const characters = localStorage.getItem('characters');

  return characters ? JSON.parse(characters) : [];
}

@Injectable({ providedIn: 'root',})

export class DragonBallService
{
  characters = signal<Character[]>(localFromLocalStorage());

  // Efectos solo tienen que hacer una tarea
  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: Character)
  {
    this.characters.update((ch) => [...ch, character]);
  }

}
