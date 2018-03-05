import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClientesModule } from './clientes/clientes.module';
import {HttpService} from '../provider/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClientesModule,
    HttpModule

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
