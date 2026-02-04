import { Component, signal } from "@angular/core";


@Component({
  templateUrl: './counter-page.component.html', // especifica la ruta del componente
  styleUrl: './counter-page.component.css'
})


export class CounterPage{

  counter: number = 0;
  counterSignal = signal(10); // definición señal

  modifyCounter(value: number): void
  {
    this.counter += value;
    // this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update((current) => current += value); // Actualizar valor
  }

  resetCounter(): void
  {
    this.counter = 0;
    this.counterSignal.set(0) // modificación señal
  }

}
