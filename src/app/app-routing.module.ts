import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesFielesComponent } from './pages/clientes-fieles/clientes-fieles.component';
import { NuestrosClientesComponent } from './pages/nuestros-clientes/nuestros-clientes.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

const routes: Routes = [
  {path: '', component: ClientesFielesComponent},
  {path: 'clientesFieles', component: ClientesFielesComponent},
  {path: 'nuestrosClientes', component: NuestrosClientesComponent},
  {path: 'clientes', component: ClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
