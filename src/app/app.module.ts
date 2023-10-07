import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioComponent } from './agendarCita/formulario/formulario.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ConfirmacionComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
