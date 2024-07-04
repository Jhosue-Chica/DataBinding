import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  standalone: true,
  imports: [],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.css'
})
export class TarjetasComponent {

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    console.log('Documento clickeado!');
    this.changeColorOfFirstCard();
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent) {
    console.log('Documento presionado!');
    this.changeColorOfAllCards();
  }

  changeColorOfFirstCard() {
    const firstCard = document.getElementById('card1');
    if (firstCard) {
      firstCard.style.backgroundColor = this.getRandomColor();
    }
  }

  changeColorOfAllCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      (card as HTMLElement).style.backgroundColor = this.getRandomColor();
    });
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


}
