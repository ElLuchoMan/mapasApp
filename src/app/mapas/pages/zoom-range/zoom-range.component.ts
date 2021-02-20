import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`.mapa-container{height:100%; width:100%;}.row{background-color:white; border-radius:10px; bottom:50px; left:50px; padding:10px; position:fixed; z-index:999;}`]
})
export class ZoomRangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.07831206521888, 4.678609145339019],
      zoom: 16,
    });
  }

}
