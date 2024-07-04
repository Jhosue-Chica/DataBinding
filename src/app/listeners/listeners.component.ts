import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-listeners',
  standalone: true,
  imports: [],
  templateUrl: './listeners.component.html',
  styleUrl: './listeners.component.css'
})
export class ListenersComponent {

  @HostListener('document:click', ['$event'])

  onDocumentClick(event: MouseEvent) {
    console.log('Documento clickeado!');
    this.changeBackgroundColor();
  }

  @HostListener('document:keydown', ['$event'])

  onDocumentKeydown(event: KeyboardEvent) {
    console.log('Documento presionado!');
  }


  /*onClick() {
     console.log("Botón Presionado")
   }
 */
  /*otro ejemplo de Template Event Listeners
  isHovered: boolean = false;
  
  onMouseOver() {
    this.isHovered = true;
  }
  
  onMouseOut() {
    this.isHovered = false;
  }

*/
  /*
    @HostListener("document:click", ["$event"])
    onDocumentClick(evento: MouseEvent) {
      console.log("Documento click", evento)
    }
  */

  changeBackgroundColor() {
    document.body.style.backgroundColor = this.getRandomColor();
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  onClick() {
    console.log('Boton presionado!');
  }
}
