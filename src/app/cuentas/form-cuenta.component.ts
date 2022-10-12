import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuenta } from './cuenta';
import { CuentaService } from './cuenta.service';

@Component({
  selector: 'app-form-cuenta',
  templateUrl: './form-cuenta.component.html',
  styleUrls: ['./form-cuenta.component.css']
})
export class FormCuentaComponent implements OnInit {

  cuenta:Cuenta = new Cuenta();

  constructor(private cuentaService:CuentaService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }
  create():void{
    this.cuentaService.create(this.cuenta).subscribe(
      res=>this.router.navigate(['/cuentas'])
    );
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      c=>{
        let id=c['id'];
        if(id){
          this.cuentaService.get(id).subscribe(
            cu=>this.cuenta=cu
          );
        }
      }
    );
  }

  update():void{
    this.cuentaService.update(this.cuenta.cuenta_id, this.cuenta).subscribe(
      res=>this.router.navigate(['/cuentas'])
    );
  }

}
