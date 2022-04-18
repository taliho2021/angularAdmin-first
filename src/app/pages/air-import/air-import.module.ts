import 'ag-grid-enterprise';

import { AgGridModule } from 'ag-grid-angular';
import { AiGridComponent } from './ai-grid/ai-grid.component';
import { AirImportComponent } from './air-import.component';
import { AirImportDashboardComponent } from './air-import-dashboard/air-import-dashboard.component';
import { AirImportDetailComponent } from './air-import-detail/air-import-detail.component';
import { AirImportRoutingModule } from './air-import-routing.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  declarations: [
    AirImportComponent,
    AirImportDetailComponent,
    AiGridComponent,
    AirImportDashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AirImportRoutingModule,
    MatTabsModule,
    MatCardModule,
    AgGridModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    WidgetsModule
  ]
})
export class AirImportModule { }
