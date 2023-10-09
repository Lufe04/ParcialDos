import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioComponent } from './agendarCita/formulario/formulario.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ConfirmacionComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
