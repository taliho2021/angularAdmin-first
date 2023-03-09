import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AmsDetailComponent } from './ams-detail/ams-detail.component';
import { AmsSummaryComponent } from './ams-summary/ams-summary.component';
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
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { TruckAmsComponent } from './truck-ams.component';
import { TruckAmsDashboardComponent } from './truck-ams-dashboard/truck-ams-dashboard.component';
import { TruckAmsRoutingModule } from './truck-ams-routing.module';


@NgModule({
    imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    FlexLayoutModule,
    FormsModule,
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
    TruckAmsRoutingModule,
    TruckAmsComponent,
    AmsSummaryComponent,
    AmsDetailComponent,
    TruckAmsDashboardComponent
]
})
export class TruckAmsModule {}
