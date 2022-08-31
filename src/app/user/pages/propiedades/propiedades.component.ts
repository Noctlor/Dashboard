import { Component } from '@angular/core';

interface Propiedad{
  titulo: string;
  descripcion:string;
  lngLat:[number,number]; 
}


@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styles: [
  ]
})
export class PropiedadesComponent  {

  propiedades: Propiedad[] = [
    {
      titulo: 'Hotel Central',
      descripcion: 'Bella propiedad en Juchitan, Oaxaca',
      lngLat: [  -95.0209102597346 , 16.43421093541873]
    },
    {
      titulo: 'Departamentos',
      descripcion: 'Departamentos Economicos , Tlajomulco de zuñiga , Guadalaraja',
      lngLat: [ -103.40241335182041,20.483135443630612 ]
    },
    {
      titulo: 'Apartamento, Puebla',
      descripcion: 'Lujoso apartamento en el corazón de Puebla',
      lngLat: [  -98.18648658370536,19.060739941435568, ]
    },
    {
      titulo: 'Alameda Monterrey',
      descripcion: 'Bosque de Monterrey.',
      lngLat: [ -100.32114574837067,25.676851660040203  ]
    },
  ]

}
