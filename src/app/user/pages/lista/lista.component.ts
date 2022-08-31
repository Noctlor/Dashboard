import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  puesto: string;
  sueldo: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Jorge', puesto:'Gerente', sueldo:40000},
  {position: 2, name: 'Arduin', puesto:'Operador', sueldo:2000},
  {position: 3, name: 'Altamirano', puesto:'Administrador', sueldo:5000},
  {position: 4, name: 'Roberto', puesto:'Gerente', sueldo:40000},
  {position: 5, name: 'Ramon', puesto:'Tecnico', sueldo:20000},
  {position: 6, name: 'Luis', puesto:'IT', sueldo:30000},
  {position: 7, name: 'Enrique', puesto:'Calidad', sueldo:7000},
  {position: 8, name: 'Humberto', puesto:'Comercio', sueldo:20000},
  {position: 9, name: 'Flor', puesto:'Gerente', sueldo:40000},
  {position: 10, name: 'Sara', puesto:'Secretaria', sueldo:15000},
];
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [`
  table {
  width: 100%;
}
  `
  ]
})
export class ListaComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'puesto', 'sueldo'];
  dataSource = ELEMENT_DATA;
}
