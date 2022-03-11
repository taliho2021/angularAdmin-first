import { CarriersComponent } from './carriers/carriers.component';
import { ClientsComponent } from './clients/clients.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { PartiesComponent } from './parties.component';
import { PartiesRoutingModule } from './parties-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { VendorsComponent } from './vendors/vendors.component';

@NgModule({
  declarations: [
    PartiesComponent,
    ClientsComponent,
    VendorsComponent,
    CarriersComponent
  ],
  imports: [
    CommonModule,
    PartiesRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatTabsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class PartiesModule { }
