import { Component } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-per-region',
  templateUrl: './per-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
  `
  ]
})
export class PerRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActive: string = '';
  paises: Country[] = [];

  constructor( private countryService: CountryService ){}

  activarRegion( region: string ){

    if( region === this.regionActive ){ return; }
    this.regionActive = region;

    this.paises = [];

    this.countryService.searchByRegion( region )
    .subscribe( paises => this.paises = paises);
  }
}
