import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OceanImportDetailComponent } from './ocean-import-detail/ocean-import-detail.component';
import { OiGridComponent } from './oi-grid/oi-grid.component';
import { OceanImportDashboardComponent } from './ocean-import-dashboard/ocean-import-dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-ocean-import',
    templateUrl: './ocean-import.component.html',
    styleUrls: ['./ocean-import.component.scss'],
    standalone: true,
    imports: [MatTabsModule, OceanImportDashboardComponent, OiGridComponent, OceanImportDetailComponent, RouterLink]
})
export class OceanImportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
