import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NuestrosClientesComponent } from './pages/nuestros-clientes/nuestros-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientesFielesComponent } from './pages/clientes-fieles/clientes-fieles.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NuestrosClientesComponent,
    ClientesFielesComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
