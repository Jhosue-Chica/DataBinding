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

  onClick(){
    console.log('Click en el boton');
    alert('Click en el boton');
  }
}
