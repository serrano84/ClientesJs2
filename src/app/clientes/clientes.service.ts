import { Injectable } from '@angular/core';
import {Cliente, Grupo } from './cliente.model';

@Injectable()
export class ClientesService {

  private clientes: Cliente[];
  private grupos: Grupo[];


  getClientes(){
    return this.clientes;
  }

  getGrupos(){
    return this.grupos;
  }


  constructor() {
    this.grupos = [ {
      id: 1,
      nombre:"Activos"
    },
    {id: 2,
    nombre:"No Activos"},
    {id: 3,
    nombre:"Bloqueados"}]

    this.clientes = [];

   }


   agregarCliente(cliente :  Cliente){
     this.clientes.push(cliente);
   }

  nuevoCliente():Cliente{
    return {
       id: this.clientes.length,
       nombre:'',
       apellido:'',
       rfc : '',
       grupo : 0
    };
  }

}
