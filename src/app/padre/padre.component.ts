import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";

@Component({
  selector: 'app-padre',
  standalone: true,
  template: `
    <app-hijo [htmlPadre]="estructuraHtml" [mensajePadre]="mensajeHijo" (notificacion)="onNotify($event)" (notificacionImg)="onNotifyImg($event)"></app-hijo>
    <br><br>
    <img [src]="imgurl" width="100px" height="100px" [hidden]="!imgurl">
  `,
  styleUrls: ['./padre.component.css'],
  imports: [HijoComponent]
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

  onNotify(mensaje: string) {
    console.log(mensaje);
  }

  onNotifyImg(imgurl: string) {
    this.imgurl = imgurl;
  }
}
