import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'dragon-ball-character-add',
  imports: [],
  templateUrl: './dragon-ball-character-add.html',
  styleUrl: './dragon-ball-character-add.css',
})
export class DragonBallCharacterAdd
{
  name = signal<string>('');
  power = signal<number>(0);

  newCharacter = output<Character>();

  public addCharacter(): void
  {
    if (!this.name() || !this.power() || this.power() <= 0)
      return;

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power()
    }

    this.newCharacter.emit(newCharacter);
    console.log({ newCharacter });
    //this.characters.update( (ch) => [...ch, newCharacter]);
  }

}
