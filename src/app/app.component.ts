import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parcialDos';

  mostrarFormulario: boolean = true;
  mostrarConfirmacion: boolean = false;
  datosDelFormulario: any = {};

  // Agrega una función para manejar el envío del formulario
  enviarFormulario(datos: any) {
    // Aquí puedes realizar cualquier procesamiento necesario con los datos
  
  // Cambia la visibilidad de los componentes
  this.mostrarFormulario = false;
  this.mostrarConfirmacion = true;

  // Asigna los datos del formulario a datosDelFormulario
  this.datosDelFormulario = datos;
  }
}
