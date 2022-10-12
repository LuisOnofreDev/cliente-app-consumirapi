import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { FormCuentaComponent } from './cuentas/form-cuenta.component';
import { ResourcesComponent } from './resources/resources.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormPostComponent } from './resources/form-post.component';

const router:Routes = [
  {path:'', redirectTo:'/resouces', pathMatch:'full'},
  {path:'resouces', component:ResourcesComponent},
  {path:'resouces/form', component:FormPostComponent},
  {path:'resouces/form/:id', component:FormPostComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CuentasComponent,
    FormCuentaComponent,
    ResourcesComponent,
    FormPostComponent,
  ],
  imports: [
    BrowserModule, NgxPaginationModule,
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
