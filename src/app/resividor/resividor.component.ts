import { Component } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resividor',
  standalone: true,
  imports: [FormularioComponent, CommonModule],
  templateUrl: './resividor.component.html',
  styleUrls: ['./resividor.component.css']
})
export class ResividorComponent {
  datosRecibidos: { nombre: string, email: string, mensaje: string } | null = null;

  // Método para manejar los datos recibidos del formulario
  recibirDatos(datos: { nombre: string, email: string, mensaje: string }) {
    this.datosRecibidos = datos;
    console.log('Datos recibidos:', this.datosRecibidos);
  }
}
