import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { ProductosComponent } from './forms/productos/productos.component';
import { MantProductoComponent } from './mantenedores/mant-producto/mant-producto.component';
import { ContactoComponent } from './forms/contacto/contacto.component';
registerLocaleData(localeES,'es');
const routes:Routes =[
  {path :'',redirectTo: '/productos',pathMatch:'full'},
  {path :'productos',component: ProductosComponent},
  {path :'crearProducto',component: MantProductoComponent},
  {path :'contacto',component: ContactoComponent},
  {path :'productos/page/:page',component: ProductosComponent},
  {path :'productos/form/:id',component: ProductosComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
