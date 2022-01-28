import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CustomsBrokerageComponent } from './customs-brokerage.component';
import { CustomsBrokerageRoutingModule } from './customs-brokerage-routing.module';
import { EntriesSummaryComponent } from './entries-summary/entries-summary.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';
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
    EntryDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CustomsBrokerageRoutingModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    FlexLayoutModule,
    WidgetsModule
  ]
})
export class CustomsBrokerageModule { }
