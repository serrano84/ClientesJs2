import { Component, OnInit } from '@angular/core';

import { ClientesService } from '../clientes.service';
import { Cliente, Grupo } from  '../cliente.model';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

clientes :  Cliente[];

  constructor(private clienteService : ClientesService) { }

  ngOnInit() {
    this.clientes = this.clienteService.getClientes();
  }

}
