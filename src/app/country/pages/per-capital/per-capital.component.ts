import { Component } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-per-capital',
  templateUrl: './per-capital.component.html',
  styles: [
  ]
})
export class PerCapitalComponent {
  
  termino: string = ''
  hayError: boolean = false;
  paises : Country[] = []

  constructor( private countryService: CountryService ){ }

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;

    this.countryService.searchCapital( this.termino )
    .subscribe(
      {
        next: ( paises ) => {
          this.paises = paises;

        }, 
        error: ( err ) => {
        this.hayError = true;
        this.paises = [];
      }
    });
  }
}


