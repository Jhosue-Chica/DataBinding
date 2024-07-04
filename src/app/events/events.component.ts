import { Component } from '@angular/core';
import { PadreComponent } from '../padre/padre.component';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [PadreComponent,HijoComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  onClick(){
    console.log('Boton ha sido presionado');
  }

  onInput(event: Event){
    const inputElement = event.target as HTMLInputElement;
    console.log(inputElement.value);
  }



}
