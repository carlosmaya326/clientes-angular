import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/interfaces/Clientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-nuestros-clientes',
  templateUrl: './nuestros-clientes.component.html',
  styleUrls: ['./nuestros-clientes.component.css']
})
export class NuestrosClientesComponent implements OnInit {

  public clientes: Clientes[];

  constructor(private _clientes: ClientesService) {
    this._clientes.getClientes().subscribe(
      resp => {
        this.clientes = resp;
      }
    );
  }

  ngOnInit(): void {
  }

}
