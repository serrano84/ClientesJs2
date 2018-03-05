import { Component, OnInit } from '@angular/core';

import { ClientesService } from '../clientes.service';
import { Cliente, Grupo } from  '../cliente.model';
import {HttpService} from '../../../provider/http';

@Component({
  selector: 'app-alta-clientes',
  templateUrl: './alta-clientes.component.html',
  styleUrls: ['./alta-clientes.component.css']
})
export class AltaClientesComponent implements OnInit {
clientes: Cliente;
grupos : Grupo[];

  constructor(private clienteService : ClientesService, private httpService : HttpService) { }

  ngOnInit() {
    this.clientes = this.clienteService.nuevoCliente();
    this.grupos = this.clienteService.getGrupos();
  }


  agregar(): void{
  this.clienteService.agregarCliente(this.clientes);
  this.clientes = this.clienteService.nuevoCliente();
  }

  save(){
    this.httpService.saveCliente(this.clientes).
    subscribe(res=>{this.clientes.apellido="0";console.log(res)},
    err=>{console.log(err)},
    ()=>{console.log("exit")});
    console.log("done");
  }

  getDatos(){
    this.httpService.getDatosClientes().
    subscribe(res=>{this.clientes = res;console.log(res)},
    err=>{console.log(err)},
    ()=>{console.log("exit")});
    console.log("done");
    this.clienteService.agregarCliente(this.clientes);
  }

}
