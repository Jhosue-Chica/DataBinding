import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { BindingComponent } from './binding/binding.component';
import { EventsComponent } from './events/events.component';
import { ListenersComponent } from './listeners/listeners.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { ResividorComponent } from './resividor/resividor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PruebaComponent, FormsModule, FormularioComponent, BindingComponent, EventsComponent, ListenersComponent, TarjetasComponent, ResividorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jhosue Chica';
}
