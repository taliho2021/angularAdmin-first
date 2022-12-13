import { CarriersComponent } from './carriers/carriers.component';
import { ClientsComponent } from './clients/clients.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
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
