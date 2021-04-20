import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientes } from '../interfaces/Clientes'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }

  getClientes(){
    return this.http.get<Clientes[]>('https://fast-caverns-63520.herokuapp.com/api/user');
  }
}
