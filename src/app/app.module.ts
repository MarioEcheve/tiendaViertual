import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './forms/productos/productos.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MantProductoComponent } from './mantenedores/mant-producto/mant-producto.component';
import {  FormsModule } from '@angular/forms';
import { ContactoComponent } from './forms/contacto/contacto.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    HeaderComponent,
    FooterComponent,
    MantProductoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
