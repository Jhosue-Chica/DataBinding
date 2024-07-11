import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() formSubmit: EventEmitter<{ nombre: string, email: string, mensaje: string }> = new EventEmitter();
  //  @Input() datos: { nombre: string, email: string, mensaje: string } = { nombre: '', email: '', mensaje: '' };
  
  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  // Método para manejar el envío del formulario
  onSubmit() {
    // Emitir los datos del formulario cuando se envía
    this.formSubmit.emit({
      nombre: this.nombre,
      email: this.email,
      mensaje: this.mensaje
    });
    console.log('Formulario enviado');
  }
}
