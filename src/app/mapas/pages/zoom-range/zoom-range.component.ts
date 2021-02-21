import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`.mapa-container{height:100%; width:100%;}.row{ background-color:white;width:400px; border-radius:10px; bottom:50px; left:50px; padding:10px; position:fixed; z-index:999;}`]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center:[number,number]=[-74.07831206521888, 4.678609145339019]
  constructor() { }
  ngOnDestroy(): void {
    this.mapa.off('zoom',()=>{});
    this.mapa.off('zoomend',()=>{});
    this.mapa.off('move',()=>{});
  }
  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });
    this.mapa.on('zoom', () => {
      this.zoomLevel = this.mapa.getZoom();
    })
    this.mapa.on('zoomend', () => {
      if (this.mapa.getZoom() > 19) {
        this.mapa.zoomTo(19);
      }
    })
    this.mapa.on('move',(event)=>{
      const target = event?.target;
      const {lng,lat} = target.getCenter();
      this.center= [lng,lat];
    })
  }

  ngOnInit(): void {
  }
  zoomOut() {
    this.mapa.zoomOut();
  }
  zoomIn() {
    this.mapa.zoomIn();
  }
  zoomCambio(valor: string) {
    this.mapa.zoomTo(Number(valor));
  }

}
