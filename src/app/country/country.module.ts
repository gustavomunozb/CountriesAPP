import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PerCapitalComponent } from './pages/per-capital/per-capital.component';
import { PerCountryComponent } from './pages/per-country/per-country.component';
import { PerRegionComponent } from './pages/per-region/per-region.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { PaisTableComponent } from './components/pais-table/pais-table.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';


@NgModule({
  declarations: [
    PerCapitalComponent,
    PerCountryComponent,
    PerRegionComponent,
    ViewCountryComponent,
    PaisTableComponent,
    PaisInputComponent
  ],
  exports: [
    PerCapitalComponent,
    PerCountryComponent,
    PerRegionComponent,
    ViewCountryComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
