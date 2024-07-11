import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  title = 'Jhosue Chica';
  numero = 50;

  imagenUrl = '../../user.png';

  twoWayDataBindig = '';

  // Ejemplo 2: Selector (Dropdown)
  selectedFruit: string = '';
  fruits: string[] = ['Manzana', 'Banana', 'Cereza', 'Datil'];

  // Ejemplo 3: Checkbox
  isSubscribed: boolean = false;

  // Ejemplo 4: Textarea
  message: string = '';

  // Ejemplo 5: Radio Buttons
  gender: string = '';

  // Ejemplo 6: Binding de Clase CSS
  isHighlighted: boolean = false;

  // Ejemplo 7: Binding de Estilo en Línea
  backgroundColor: string = 'lightblue';

  // Ejemplo 8: Binding de Atributos
  minRange: number = 0;
  maxRange: number = 100;
  rangeValue: number = 50;

  onClick(){
    console.log('Click en el boton');
    alert('Click en el boton');
  }

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  changeColor() {
    this.backgroundColor = this.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
  }
}
