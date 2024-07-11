import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-padre',
  standalone: true,
  template: `
    <app-hijo [htmlPadre]="estructuraHtml" [mensajePadre]="mensajeHijo" (notificacion)="onNotify($event)" (notificacionImg)="onNotifyImg($event)" (cardEmit)="onReceiveCard($event)"></app-hijo>
    <br><br>
    <button (click)="toggleCard()">Mostrar Tarjeta</button>
    <br><br>
    <div [innerHTML]="cardHtml" *ngIf="showCard"></div>
    <br><br>
    <img [src]="imgurl" width="100px" height="100px" [hidden]="!imgurl">
  `,
  styleUrls: ['./padre.component.css'],
  imports: [HijoComponent, CommonModule]
})
export class PadreComponent {
  mensajeHijo: string = 'Mensaje enviado desde el padre';
  estructuraHtml: string = `
    <div class='extra-content'>
      <h2>Contenido enviado desde el Padre</h2>
      <p>Esto es un párrafo con <strong>HTML</strong> enviado como una cadena.</p>
    </div>
  `;
  imgurl: string | null = null;
  cardHtml: string = '';
  showCard: boolean = false;

  onNotify(mensaje: string) {
    console.log(mensaje);
  }

  onNotifyImg(imgurl: string) {
    this.imgurl = imgurl;
  }

  onReceiveCard(cardHtml: string) {
    this.cardHtml = cardHtml;
  }

  toggleCard() {
    this.showCard = !this.showCard;
  }
}
