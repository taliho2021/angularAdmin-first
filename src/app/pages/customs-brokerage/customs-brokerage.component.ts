import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChartsComponent } from '../../widgets/charts/charts.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';
import { EntriesSummaryComponent } from './entries-summary/entries-summary.component';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout/flex';
import { EntryGridComponent } from './entry-grid/entry-grid.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-customs-brokerage',
    templateUrl: './customs-brokerage.component.html',
    styleUrls: ['./customs-brokerage.component.scss'],
    standalone: true,
    imports: [MatTabsModule, EntryGridComponent, FlexModule, MatCardModule, EntriesSummaryComponent, EntryDetailComponent, ChartsComponent, RouterLink]
})
export class CustomsBrokerageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
