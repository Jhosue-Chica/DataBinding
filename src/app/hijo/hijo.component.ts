import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  template: `
    <p>{{ mensajePadre }}</p>
    <div [innerHTML]="htmlPadre"></div>
    <button (click)="notifyParent()">Notificar al padre</button>
    <br><br>
    <button (click)="notifyParentImg()">Notificar al padre con imagen</button>
    <br><br>
    <button (click)="sendCard()">Enviar Tarjeta al Padre</button>
    <br><br>
    <div class="container">
      <div class="card-container">
        <div class="card">
            <h3>Título de la Tarjeta 1</h3>
            <p>Descripción de la tarjeta 1.</p>
        </div>
        <div class="card">
            <h3>Título de la Tarjeta 2</h3>
            <p>Descripción de la tarjeta 2.</p>
        </div>
        <div class="card">
            <h3>Título de la Tarjeta 3</h3>
            <p>Descripción de la tarjeta 3.</p>
        </div>
        <div class="card">
            <h3>Título de la Tarjeta 4</h3>
            <p>Descripción de la tarjeta 4.</p>
        </div>
        <div class="card">
            <h3>Título de la Tarjeta 5</h3>
            <p>Descripción de la tarjeta 5.</p>
        </div>
        <div class="card">
            <h3>Título de la Tarjeta 6</h3>
            <p>Descripción de la tarjeta 6.</p>
        </div>
      </div>
    </div>
    `,
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() mensajePadre: string = '';
  @Input() htmlPadre: string = '';
  @Output() notificacion: EventEmitter<string> = new EventEmitter<string>();
  @Output() notificacionImg: EventEmitter<string> = new EventEmitter<string>();
  @Output() cardEmit: EventEmitter<string> = new EventEmitter<string>();

  notifyParent() {
    this.notificacion.emit('Hola, soy tu hijo');
  }

  notifyParentImg() {
    const imgurl = '../../user.png';
    this.notificacionImg.emit(imgurl);
  }

  sendCard() {
    const cardHtml = `
    <div class="container">
      <div class="card-container">
        <div class="card">
          <h3>Título de la Tarjeta 9</h3>
          <p>Descripción de la tarjeta 9.</p>
        </div>
      </div>
    </div>`;
    this.cardEmit.emit(cardHtml);
  }
}
