import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Miembro } from '../models/Miembro';

@Injectable({
  providedIn: 'root'
})
export class MiembrosService {
  url: String = "http://localhost:8080";

  constructor( protected http: HttpClient ) { }

  listar(): Observable<any> {
    return this.http.get(this.url + "/miembros/listar");
  }
  
  // agregar

  // eliminar

}
