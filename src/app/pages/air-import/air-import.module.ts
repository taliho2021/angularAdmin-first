import 'ag-grid-enterprise';

import { AgGridModule } from 'ag-grid-angular';
import { AiGridComponent } from './ai-grid/ai-grid.component';
import { AirImportComponent } from './air-import.component';
import { AirImportDetailComponent } from './air-import-detail/air-import-detail.component';
import { AirImportRoutingModule } from './air-import-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AirImportComponent,
    AirImportDetailComponent,
    AiGridComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AirImportRoutingModule,
    MatTabsModule,
    AgGridModule,
    ReactiveFormsModule
  ]
})
export class AirImportModule { }
