import { Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';


@Component({
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.css',
  imports: [UpperCasePipe],
})


export class HeroComponent {

  name = signal<string>('Ironman');
  age = signal<number>(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });
  // Computed singal is just a readonly signal wich can change if the dependencies below were changed

  // Exercise create the capitilize signal

  capitalizedName = computed(() => {
    return this.name().toUpperCase();
  });


  public getHeroDescription(): string
  {
      return `${this.name()} - ${this.age()}`;
  }

  public changeHero(): void
  {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  public changeAge(): void
  {
    this.age.set(60);
  }

  public resetForm(): void
  {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
