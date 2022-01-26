import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { OceanImportComponent } from './ocean-import.component';
import { OceanImportRoutingModule } from './ocean-import-routing.module';
import { OceanImportDetailComponent } from './ocean-import-detail/ocean-import-detail.component';
import { OceanImportSummaryComponent } from './ocean-import-summary/ocean-import-summary.component';

@NgModule({
  declarations: [
    OceanImportComponent,
    OceanImportDetailComponent,
    OceanImportSummaryComponent
  ],
  imports: [
    CommonModule,
    OceanImportRoutingModule,
    MatTabsModule,
    MatCardModule
  ]
})
export class OceanImportModule { }
