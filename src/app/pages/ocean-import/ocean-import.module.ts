import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { OceanImportComponent } from './ocean-import.component';
import { OceanImportDashboardComponent } from './ocean-import-dashboard/ocean-import-dashboard.component';
import { OceanImportDetailComponent } from './ocean-import-detail/ocean-import-detail.component';
import { OceanImportRoutingModule } from './ocean-import-routing.module';
import { OceanImportSummaryComponent } from './ocean-import-summary/ocean-import-summary.component';
import { OiGridComponent } from './oi-grid/oi-grid.component';


@NgModule({
    imports: [
    CommonModule,
    OceanImportRoutingModule,
    MatTabsModule,
    MatCardModule,
    FlexLayoutModule,
    AgGridModule,
    OceanImportComponent,
    OceanImportDetailComponent,
    OceanImportSummaryComponent,
    OiGridComponent,
    OceanImportDashboardComponent
]
})
export class OceanImportModule {}
