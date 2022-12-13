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
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
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
