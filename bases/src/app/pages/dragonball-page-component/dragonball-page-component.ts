import { Component, signal } from '@angular/core';

interface Character
{
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page-component.html',
  imports: [],
})

export class DragonballPageComponent
{
  name = signal<string>('');
  power = signal<number>(0);


  characters = signal<Character[]>([
    {id: 1, name: "Goku", power: 9001}
    // {id: 2, name: "Vegetta", power: 8001},
    // {id: 3, name: "Piccolo", power: 7001},
    // {id: 4, name: "Yamcha", power: 500}
  ]);

  public addCharacter(): void
  {
    if (!this.name() || !this.power() || this.power() <= 0)
      return;

    const newCharacter: Character = {
      id: this.characters.length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update( (ch) => [...ch, newCharacter]);
  }

}
