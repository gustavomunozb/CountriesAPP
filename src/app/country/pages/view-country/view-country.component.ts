import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country-interface';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [
  ]
})
export class ViewCountryComponent implements OnInit{

  pais: Country = null!;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService 
    ){ }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.countryService.getCountryPerAlpha(params['id']).subscribe(pais => {
        this.pais = pais[0];
      });
    })
  }    
}

