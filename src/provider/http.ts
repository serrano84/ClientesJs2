import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the Httpfix provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpService{

  fixUrl:string='http://localhost:8080/MvcAngular1/alumnosCtrl/variable';
  fixGet:string='http://localhost:8080/MvcAngular1/alumnosCtrl/getDatosAlumnos';

  constructor(public http: Http) {
    console.log('Hello Httpfix Provider');
  }

  saveCliente(cliente){
    return this.http.post(this.fixUrl+"/"+cliente.nombre, null).map(res=>res);
  }

 getDatosClientes(){
    return this.http.get(this.fixGet).map(res=>res);
 }
}
