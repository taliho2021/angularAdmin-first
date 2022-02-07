import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { CustomsBrokerageComponent } from './customs-brokerage.component';
import { CustomsBrokerageRoutingModule } from './customs-brokerage-routing.module';
import { EntriesSummaryComponent } from './entries-summary/entries-summary.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';
import { EntryGridComponent } from './entry-grid/entry-grid.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  declarations: [
    CustomsBrokerageComponent,
    EntriesSummaryComponent,
    EntryDetailComponent,
    EntryGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    FlexLayoutModule,
    AgGridModule,
    CustomsBrokerageRoutingModule,
    WidgetsModule
  ]
})
export class CustomsBrokerageModule { }
