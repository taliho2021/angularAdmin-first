import { RouterModule, Routes } from '@angular/router';

import { AddCvdComponent } from './add-cvd/add-cvd.component';
import { CarriersComponent } from './carriers/carriers.component';
import { CountryComponent } from './country/country.component';
import { CurrencyComponent } from './currency/currency.component';
import { FdaProductComponent } from './fda-product/fda-product.component';
import { FirmsComponent } from './firms/firms.component';
import { ForeignPortsComponent } from './foreign-ports/foreign-ports.component';
import { HTSComponent } from './hts/hts.component';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
import { NgModule } from '@angular/core';
import { PortsComponent } from './ports/ports.component';
import { ProductsComponent } from './products/products.component';
import { StatesComponent } from './states/states.component';
import { TablesComponent } from './tables.component';
import { VesselComponent } from './vessel/vessel.component';

const routes: Routes = [
  { path: '', component: TablesComponent,
    children: [
      { path: 'carriers', component: CarriersComponent},
      { path: 'ports', component: PortsComponent},
      { path: 'foreignPorts', component: ForeignPortsComponent},
      { path: 'country', component: CountryComponent},
      { path: 'states', component: StatesComponent},
      { path: 'firms', component: FirmsComponent},
      { path: 'hts', component: HTSComponent},
      { path: 'manufacturers', component: ManufacturersComponent},
      { path: 'add-cvd', component:AddCvdComponent},
      { path: 'fdaProduct', component: FdaProductComponent},
      { path: 'currency', component: CurrencyComponent},
      { path: 'vessel', component: VesselComponent},
      { path: 'products', component: ProductsComponent}
      ]}
    ]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
