import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p style="color: blue;">Mensaje: {{ texto }}</p>
  `
})
export class MensajeComponent {
  @Input() texto: string = '';
}
