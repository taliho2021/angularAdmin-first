import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import { AirAmsComponent } from './air-ams.component';
import { AirAmsDashboardComponent } from './air-ams-dashboard/air-ams-dashboard.component';
import { AirAmsGridComponent } from './air-ams-grid/air-ams-grid.component';
import { AirAmsRoutingModule } from './air-ams-routing.module';
import { AirAmsSummaryComponent } from './air-ams-summary/air-ams-summary.component';
import { AmsDetailComponent } from './ams-detail/ams-detail.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { NgModule } from '@angular/core';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { SearchPipe } from 'src/app/pipes/search.pipe';

@NgModule({
  declarations: [
    AirAmsComponent,
    AmsDetailComponent,
    AirAmsSummaryComponent,
    AirAmsGridComponent,
    AirAmsDashboardComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AirAmsRoutingModule,
    MatTabsModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatDividerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    AgGridModule,
    WidgetsModule,
  ],
})
export class AirAmsModule {}
