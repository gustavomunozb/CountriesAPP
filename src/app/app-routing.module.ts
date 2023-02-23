import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PerCountryComponent } from './country/pages/per-country/per-country.component';
import { PerRegionComponent } from './country/pages/per-region/per-region.component';
import { PerCapitalComponent } from './country/pages/per-capital/per-capital.component';
import { ViewCountryComponent } from './country/pages/view-country/view-country.component';

const routes: Routes = [
    {
        path: '',
        component: PerCountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PerRegionComponent,
        pathMatch: 'full'
    },
    {
        path: 'capital',
        component: PerCapitalComponent,
        pathMatch: 'full'
    },
    {
        path: 'pais/:id',
        component: ViewCountryComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule {};