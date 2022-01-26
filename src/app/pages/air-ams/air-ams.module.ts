import { AirAmsComponent } from './air-ams.component';
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
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AirAmsComponent,
    AmsDetailComponent,
    AirAmsSummaryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
    MatButtonModule

  ]
})
export class AirAmsModule { }
