import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-full-sreen',
  templateUrl: './full-sreen.component.html',
  styles: [`#mapa{height:100%; width:100%;}`]
})
export class FullSreenComponent implements OnInit {

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
