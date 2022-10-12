import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Cuenta } from './cuenta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  private url:string="http://localhost:8080/cuentas";
  constructor( private http:HttpClient) { }
  
  //Obtener cuentas
  getAll():Observable<Cuenta[]>{
    return this.http.get<Cuenta[]>(this.url);
  }

  //Obtener una cuenta
  get(id:number):Observable<Cuenta>{
    return this.http.get<Cuenta>(this.url + '/' + id);
  }

  //Crear cuenta
  create(cuenta:Cuenta):Observable<Cuenta>{
    return this.http.post<Cuenta>(this.url, cuenta);
  }

  //Actualizar cuenta con PUT
  update(id:number, cuenta:Cuenta):Observable<Cuenta>{
    return this.http.put<Cuenta>(this.url + '/' + id, cuenta);
  }

  //Actualizar cuenta con PATCH
  patch(id:number, cuenta:Cuenta):Observable<Cuenta>{
    return this.http.patch<Cuenta>(this.url  + '/' + id, cuenta);
  }

  //Eliminar una cuenta
  delete(id:number):Observable<Cuenta>{
    return this.http.delete<Cuenta>(this.url + '/' + id);
  }
}
