import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OceanExportDetailComponent } from './ocean-export-detail/ocean-export-detail.component';
import { OeGridComponent } from './oe-grid/oe-grid.component';
import { OceanExportDashboardComponent } from './ocean-export-dashboard/ocean-export-dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-ocean-export',
    templateUrl: './ocean-export.component.html',
    styleUrls: ['./ocean-export.component.scss'],
    standalone: true,
    imports: [MatTabsModule, OceanExportDashboardComponent, OeGridComponent, OceanExportDetailComponent, RouterLink]
})
export class OceanExportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
