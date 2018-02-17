import { Component, OnInit } from '@angular/core';

import { ClientesService } from '../clientes.service';
import { Cliente, Grupo } from  '../cliente.model';

@Component({
  selector: 'app-alta-clientes',
  templateUrl: './alta-clientes.component.html',
  styleUrls: ['./alta-clientes.component.css']
})
export class AltaClientesComponent implements OnInit {
clientes: Cliente;
grupos : Grupo[];

  constructor(private clienteService : ClientesService) { }

  ngOnInit() {
    this.clientes = this.clienteService.nuevoCliente();
    this.grupos = this.clienteService.getGrupos();
  }


  agregar(): void{
  this.clienteService.agregarCliente(this.clientes);
  this.clientes = this.clienteService.nuevoCliente();
  }

}
