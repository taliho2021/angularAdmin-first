import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HtsComponent } from './hts/hts.component';
import { IsfComponent } from './isf.component';
import { IsfRoutingModule } from './isf-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { PartiesComponent } from './parties/parties.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShipmentComponent } from './shipment/shipment.component';
import { DomesticComponent } from './domestic/domestic.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ForeignComponent } from './foreign/foreign.component';

@NgModule({
  declarations: [
    IsfComponent,
    ShipmentComponent,
    PartiesComponent,
    HtsComponent,
    DomesticComponent,
    ForeignComponent
  ],
  imports: [
    CommonModule,
    IsfRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class IsfModule { }
