import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullSreenComponent } from './pages/full-sreen/full-sreen.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'fullscreen', component: FullSreenComponent },
      { path: 'zoomrange', component: ZoomRangeComponent },
      { path: 'marcadores', component: MarcadoresComponent },
      { path: 'sedes', component: PropiedadesComponent },
      { path: '**', redirectTo: 'fullscreen' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
