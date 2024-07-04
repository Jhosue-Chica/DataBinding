import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
  title = 'Jhosue Chica';
  numero = 50;

  imagenUrl = '../../user.png';

  twoWayDataBindig = '';

  onClick(){
    console.log('Click en el boton');
    alert('Click en el boton');
  }
}
