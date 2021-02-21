import { Component } from '@angular/core';

interface Sede {
  titulo: string;
  descripcion: string;
  lngLat: [number, number];
}

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styles: [
  ]
})
export class PropiedadesComponent {

  sedes: Sede[] = [
    {
      titulo: 'Sabio Caldas',
      descripcion: 'Facultad de Ingeniería',
      lngLat: [-74.0658421851182, 4.628169166113518]
    },
    {
      titulo: 'Alejandro Suárez Copete',
      descripcion: 'Facultad de Ingeniería',
      lngLat: [-74.06578175662207, 4.628374570811172]
    },
    {
      titulo: 'Aduanilla de Paiba',
      descripcion: 'Biblioteca Central',
      lngLat: [-74.09336877258242, 4.61500891865752,]
    },
    {
      titulo: 'Calle 34',
      descripcion: 'Facultad Medio Ambiente y Recursos Naturales',
      lngLat: [-74.06843005863388, 4.621928273439838]
    },
    {
      titulo: 'Sabio Caldas',
      descripcion: 'Sede Administrativa',
      lngLat: [-74.06538664722424, 4.6281135678392475]
    },
    {
      titulo: 'Calle 64',
      descripcion: 'Postgrados',
      lngLat: [-74.07806588425004, 4.659712119570532]
    },
    {
      titulo: 'Nueva Santa Fé',
      descripcion: 'Centro Cultural',
      lngLat: [-74.0765773221844, 4.592185473149131]
    },
    {
      titulo: 'Bosa Porvenir',
      descripcion: 'Facultad Medio Ambiente y Recursos Naturales',
      lngLat: [-74.1857598253413, 4.638069937785189]
    },
    {
      titulo: 'Ugi',
      descripcion: 'Instituto de Lenguas',
      lngLat: [-74.06734501415045, 4.627585532845053]
    },
    {
      titulo: 'El Tibar',
      descripcion: 'Centro experimental y de investigación',
      lngLat: [-73.91986606612096, 4.507661522875938]
    },
    {
      titulo: 'La UD Radio',
      descripcion: 'Emisora de la Universidad Distrital',
      lngLat: [-74.06796799148229, 4.617331971873964],
    },
    {
      titulo: 'IDEXUD',
      descripcion: 'Instituto de Extensión',
      lngLat: [-74.07246806709873, 4.621394142344486],
    },
    {
      titulo: 'Rebeca',
      descripcion: 'Instituto de Lenguas',
      lngLat: [-74.07201212707321, 4.61090460718026],
    },
    {
      titulo: 'San Luis Calle 58',
      descripcion: 'Instituto de Lenguas',
      lngLat: [-74.06849766784693, 4.646430483401409],
    },
    {
      titulo: 'Virrey',
      descripcion: 'Instituto de Lenguas',
      lngLat: [-74.05851800440203, 4.671981796284444],
    },
    {
      titulo: 'Academia Luis A. Calvo',
      descripcion: 'Facultad de Artes',
      lngLat: [-74.0637481576374, 4.639126036430145],
    },
    {
      titulo: 'Macarena A',
      descripcion: 'Facultad de Ciencias y Educación',
      lngLat: [-74.06392278288078, 4.613525465509393]
    },
    {
      titulo: 'Macarena B',
      descripcion: 'Facultad de Ciencias y Educación',
      lngLat: [-74.06518094541386, 4.613578514832538]
    },
    {
      titulo: 'Palacio la Merced',
      descripcion: 'Facultad de Artes',
      lngLat: [-74.07847722371302, 4.604598716854591]
    },
    {
      titulo: 'Publicaciones',
      descripcion: 'Editorial',
      lngLat: [-74.07584578828939, 4.624603484425347],
    },
    {
      titulo: 'Sótanos Avenida Jiménez',
      descripcion: 'Facultad de Artes',
      lngLat: [-74.07393330195845, 4.601451979956867],
    },
    {
      titulo: 'Tecnológica',
      descripcion: 'Facultad Tecnológica',
      lngLat: [-74.15758083675688, 4.579436150860227],
    },
    {
      titulo: 'Vivero',
      descripcion: 'Facultad Medio Ambiente y Recursos Naturales',
      lngLat: [-74.06457069479566, 4.597253726624329],
    },

  ]

}
