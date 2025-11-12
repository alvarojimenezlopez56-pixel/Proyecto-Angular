import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <p>Contador: {{ contador }}</p>
      <button (click)="incrementar()">+1</button>
      <button (click)="decrementar()">-1</button>
    </div>
  `
})
export class ContadorComponent {
  contador = 0;

  @Output() cambio = new EventEmitter<number>();

  incrementar() {
    this.contador++;
    this.cambio.emit(this.contador);
  }

  decrementar() {
    this.contador--;
    this.cambio.emit(this.contador);
  }
}
