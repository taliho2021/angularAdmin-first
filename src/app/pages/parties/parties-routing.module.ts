import { RouterModule, Routes } from '@angular/router';

import { CarriersComponent } from './carriers/carriers.component';
import { ClientsComponent } from './clients/clients.component';
import { NgModule } from '@angular/core';
import { PartiesComponent } from './parties.component';
import { VendorsComponent } from './vendors/vendors.component';

const routes: Routes = [
  { path: '', component: PartiesComponent },
  { path: 'carriers', component: CarriersComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'vendors', component: VendorsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartiesRoutingModule { }
