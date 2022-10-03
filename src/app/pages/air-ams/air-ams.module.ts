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
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  declarations: [
    AirAmsComponent,
    AmsDetailComponent,
    AirAmsSummaryComponent,
    AirAmsGridComponent,
    AirAmsDashboardComponent,
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
