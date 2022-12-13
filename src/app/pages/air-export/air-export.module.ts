import { AirExportComponent } from './air-export.component';
import { AirExportDashboardComponent } from './air-export-dashboard/air-export-dashboard.component';
import { AirExportDetailComponent } from './air-export-detail/air-export-detail.component';
import { AirExportRoutingModule } from './air-export-routing.module';
import { CommonModule } from '@angular/common';
import { ExportSummaryComponent } from './export-summary/export-summary.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  declarations: [
    AirExportComponent,
    ExportSummaryComponent,
    AirExportDetailComponent,
    AirExportDashboardComponent
  ],
  imports: [
    CommonModule,
    AirExportRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    WidgetsModule
  ]
})
export class AirExportModule { }
