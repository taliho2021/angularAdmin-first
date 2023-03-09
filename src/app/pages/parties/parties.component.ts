import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarriersComponent } from './carriers/carriers.component';
import { VendorsComponent } from './vendors/vendors.component';
import { ClientsComponent } from './clients/clients.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-parties',
    templateUrl: './parties.component.html',
    styleUrls: ['./parties.component.scss'],
    standalone: true,
    imports: [MatTabsModule, ClientsComponent, VendorsComponent, CarriersComponent, RouterLink]
})
export class PartiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
