import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensajeComponent } from './mensaje';
import { ContadorComponent } from './contador';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MensajeComponent, ContadorComponent],
  template: `
    <div style="text-align:center; margin-top:50px;">
      <h1>Angular Standalone Demo</h1>
      <app-mensaje [texto]="mensaje"></app-mensaje>
      <button (click)="cambiarMensaje()">Cambiar mensaje</button>
      <hr>
      <app-contador (cambio)="actualizarMensaje($event)"></app-contador>
    </div>
  `
})
export class AppComponent {
  mensaje = '¡Hola desde Angular!';

  cambiarMensaje() {
    this.mensaje = '¡Mensaje cambiado!';
  }

  actualizarMensaje(valor: number) {
    this.mensaje = `El contador ahora es ${valor}`;
  }
}
