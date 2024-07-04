import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";

@Component({
  selector: 'app-padre',
  standalone: true,
  template: `
    <app-hijo (notificacion)="onNotify($event)" (notificacionImg)="onNotifyImg($event)"></app-hijo>
    <br><br>
    <img [src]="imgurl" width="100px" height="100px" [hidden]="!imgurl">
  `,
  styleUrls: ['./padre.component.css'],
  imports: [HijoComponent]
})
export class PadreComponent {
  imgurl: string | null = null;

  onNotify(mensaje: string) {
    console.log(mensaje);
  }

  onNotifyImg(imgurl: string) {
    this.imgurl = imgurl;
  }
}
