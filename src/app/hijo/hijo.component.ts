import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  template: `
    <button (click)="notifyParent()">Notificar al padre</button>
    <br><br>
    <button (click)="notifyParentImg()">Notificar al padre con imagen</button>
    `,
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Output() notificacion: EventEmitter<string> = new EventEmitter<string>();
  @Output() notificacionImg: EventEmitter<string> = new EventEmitter<string>();

  notifyParent() {
    this.notificacion.emit('Hola, soy tu hijo');
  }

  notifyParentImg() {
    const imgurl = '../../user.png';
    this.notificacionImg.emit(imgurl);
  }
}
