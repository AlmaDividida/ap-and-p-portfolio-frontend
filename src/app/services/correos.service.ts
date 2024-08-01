import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorreosService {

  url: String = "http://localhost:8080";

  constructor(
    protected http: HttpClient,
  ) { }

  sendEmail(data: any): Observable<any> {
    return this.http.post(this.url + "/correos/enviar", data);
  }

}
