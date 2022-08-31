import { AfterViewInit, Component, ElementRef, Input,  ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-minimap',
  templateUrl: './minimap.component.html',
  styleUrls: ['./minimap.component.css']
})
export class MinimapComponent implements AfterViewInit {

  constructor() { }

  @Input() lngLat:[number,number]=[0,0]
  @ViewChild('mapa') divmapa!:ElementRef
  ngAfterViewInit(): void {
    const mapa = new mapboxgl.Map({
      container: this.divmapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.lngLat,
      zoom: 15,
  
              });

              new mapboxgl.Marker()
              .setLngLat(this.lngLat)
              .addTo(mapa)
  }

}
