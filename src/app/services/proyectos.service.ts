import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  url: String = "http://localhost:8080";

  constructor( protected http: HttpClient ) {}

  listar(): Observable<any> {
    return this.http.get(this.url + "proyectos/listar");
  }

  // agregar

  // eliminar
}
