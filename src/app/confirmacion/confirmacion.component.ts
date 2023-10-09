import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent {
  @Input() datos: any;

  constructor(private router: Router) {}

  irFormulario() {
    this.router.navigate(['\formuario'])
  }
  
}
