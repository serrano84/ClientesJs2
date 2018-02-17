import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaClientesComponent } from './alta-clientes/alta-clientes.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';

import { ClientesService } from './clientes.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AltaClientesComponent, ListaClientesComponent],
  exports:[AltaClientesComponent,ListaClientesComponent],
  providers:[ClientesService]
})
export class ClientesModule { }
