import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { DomesticComponent } from './domestic/domestic.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForeignComponent } from './foreign/foreign.component';
import { HtsComponent } from './hts/hts.component';
import { IsfComponent } from './isf.component';
import { IsfGridComponent } from './isf-grid/isf-grid.component';
import { IsfRoutingModule } from './isf-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { PartiesComponent } from './parties/parties.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { IsfDetailComponent } from './isf-detail/isf-detail.component';

@NgModule({
  declarations: [
    IsfComponent,
    ShipmentComponent,
    PartiesComponent,
    HtsComponent,
    DomesticComponent,
    ForeignComponent,
    IsfGridComponent,
    IsfDetailComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSelectModule,
    AgGridModule,
    IsfRoutingModule,
  ]
})
export class IsfModule { }
