import { Component, OnInit } from '@angular/core';
import { Cuenta } from './cuenta';
import { CuentaService } from './cuenta.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  listaCuentas: Cuenta[] = [];

  constructor(private cuentaService:CuentaService) { }

  ngOnInit(): void {
    this.cuentaService.getAll().subscribe(
      respuesta => this.listaCuentas = respuesta
    );
  }

  delete(cuenta:Cuenta):void {
    this.cuentaService.delete(cuenta.cuenta_id).subscribe(
      res=>this.cuentaService.getAll().subscribe(
        response=>this.listaCuentas= response
      )
    );
  }

}
