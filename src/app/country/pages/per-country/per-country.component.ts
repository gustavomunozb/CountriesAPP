import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country-interface';

@Component({
  selector: 'app-per-country',
  templateUrl: './per-country.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `
  ]
})
export class PerCountryComponent {

  termino: string = ''
  hayError: boolean = false;
  paises : Country[] = []

  paisesSugeridos: Country[] = []
  mostrarSugerencias: boolean = false;

  constructor( private countryService: CountryService ){ }

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;

    this.countryService.searchCountry( this.termino )
    .subscribe(
      {
        next: ( paises ) => {
          console.log( paises );
          this.paises = paises;

        }, 
        error: ( err ) => {
        this.hayError = true;
        this.paises = [];
      }
    });
  }

  sugerencias( termino: string ){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.countryService.searchCountry( termino )
    .subscribe({
      next: ( paises ) =>{
        this.paisesSugeridos = paises.splice(0,5);
      },
      error: ( err ) => {
        this.paisesSugeridos = [];
        this.mostrarSugerencias = false;
      }
    });
  }

  buscarSugerido( termino: string){
    this.buscar( termino );
  }
}
