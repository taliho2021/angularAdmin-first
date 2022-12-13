import { MatLegacyCard as MatCard, MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';

import { AddCvdComponent } from './add-cvd/add-cvd.component';
import { CarriersComponent } from './carriers/carriers.component';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { CurrencyComponent } from './currency/currency.component';
import { FdaProductComponent } from './fda-product/fda-product.component';
import { FirmsComponent } from './firms/firms.component';
import { ForeignPortsComponent } from './foreign-ports/foreign-ports.component';
import { HTSComponent } from './hts/hts.component';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { NgModule } from '@angular/core';
import { PortsComponent } from './ports/ports.component';
import { ProductsComponent } from './products/products.component';
import { StatesComponent } from './states/states.component';
import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables-routing.module';
import { VesselComponent } from './vessel/vessel.component';

@NgModule({
  declarations: [
    TablesComponent,
    CarriersComponent,
    PortsComponent,
    ForeignPortsComponent,
    CountryComponent,
    StatesComponent,
    FirmsComponent,
    HTSComponent,
    ManufacturersComponent,
    AddCvdComponent,
    FdaProductComponent,
    CurrencyComponent,
    VesselComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule
  ]
})
export class TablesModule { }
