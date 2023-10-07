import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  especificaHabilitado: boolean = false;
  @Output() formularioEnviado = new EventEmitter<any>()
  
  //datos del formulario
  nombre: string = ""
  apellido: string = ""
  correo: string = ""
  id: string = ""
  telefono: string = ""
  tipoCita: string = ''
  fechaActual: string = new Date().toISOString().split('T')[0];
  

  ngOnInit() {
  }

  // Método para habilitar especifica cuando se selecciona el otro
  habilitarEspecifica() {
    this.especificaHabilitado = true;
  }
  deshabilitarEspecifica() {
    this.especificaHabilitado = false;
  }

  enviarFormulario() {
    
    // Realiza la lógica de procesamiento del formulario aquí
    const datosFormulario={
      nombre: this.nombre, 
      apellido: this.apellido, 
      correo: this.correo, 
      id: this.id, 
      telefono: this.telefono, 
      fechaActual: this.fechaActual,
      tipoCita: this.tipoCita,

    }
    // Emite los datos del formulario al componente principal
    this.formularioEnviado.emit(datosFormulario);
  }

}
