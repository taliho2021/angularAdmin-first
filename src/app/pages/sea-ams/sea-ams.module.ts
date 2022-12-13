import { AirAmsRoutingModule } from '../air-ams/air-ams-routing.module';
import { AmsDetailComponent } from './ams-detail/ams-detail.component';
import { AmsSummaryComponent } from './ams-summary/ams-summary.component';
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
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SeaAmsComponent } from './sea-ams.component';
import { SeaAmsDashboardComponent } from './sea-ams-dashboard/sea-ams-dashboard.component';
import { SeaAmsRoutingModule } from './sea-ams-routing.module';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  declarations: [
    SeaAmsComponent,
    AmsDetailComponent,
    AmsSummaryComponent,
    SeaAmsDashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
    WidgetsModule,
    SeaAmsRoutingModule
  ]
})
export class SeaAmsModule { }
