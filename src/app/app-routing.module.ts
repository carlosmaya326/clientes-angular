import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuestrosClientesComponent } from './pages/nuestros-clientes/nuestros-clientes.component';

const routes: Routes = [
  {path: '', component: NuestrosClientesComponent},
  {path: 'nuestrosClientes', component: NuestrosClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
