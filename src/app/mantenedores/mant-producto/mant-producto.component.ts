import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mant-producto',
  templateUrl: './mant-producto.component.html',
  styleUrls: ['./mant-producto.component.css']
})
export class MantProductoComponent implements OnInit {
  public titulo:string ="Crear Cliente";
  constructor() { }

  ngOnInit() {
  }
  create(){}
}
