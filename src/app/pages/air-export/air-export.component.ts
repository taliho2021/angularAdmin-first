import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AirExportDetailComponent } from './air-export-detail/air-export-detail.component';
import { ExportSummaryComponent } from './export-summary/export-summary.component';
import { AirExportDashboardComponent } from './air-export-dashboard/air-export-dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-air-export',
    templateUrl: './air-export.component.html',
    styleUrls: ['./air-export.component.scss'],
    standalone: true,
    imports: [MatTabsModule, AirExportDashboardComponent, ExportSummaryComponent, AirExportDetailComponent, RouterLink]
})
export class AirExportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
