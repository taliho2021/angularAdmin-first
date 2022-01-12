import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HtsComponent } from './hts/hts.component';
import { IsfComponent } from './isf.component';
import { IsfRoutingModule } from './isf-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { PartiesComponent } from './parties/parties.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShipmentComponent } from './shipment/shipment.component';

@NgModule({
  declarations: [
    IsfComponent,
    ShipmentComponent,
    PartiesComponent,
    HtsComponent
  ],
  imports: [
    CommonModule,
    IsfRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class IsfModule { }
