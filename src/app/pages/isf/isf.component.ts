import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HtsComponent } from './hts/hts.component';
import { PartiesComponent } from './parties/parties.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { IsfGridComponent } from './isf-grid/isf-grid.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-isf',
    templateUrl: './isf.component.html',
    styleUrls: ['./isf.component.scss'],
    standalone: true,
    imports: [MatTabsModule, IsfGridComponent, ShipmentComponent, PartiesComponent, HtsComponent, RouterLink]
})
export class IsfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
