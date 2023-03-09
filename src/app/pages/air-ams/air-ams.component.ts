import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AmsDetailComponent } from './ams-detail/ams-detail.component';
import { AirAmsGridComponent } from './air-ams-grid/air-ams-grid.component';
import { AirAmsDashboardComponent } from './air-ams-dashboard/air-ams-dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-air-ams',
    templateUrl: './air-ams.component.html',
    styleUrls: ['./air-ams.component.scss'],
    standalone: true,
    imports: [MatTabsModule, AirAmsDashboardComponent, AirAmsGridComponent, AmsDetailComponent, RouterLink]
})
export class AirAmsComponent {

  myControl = new UntypedFormControl();
  options: string[] = ['One', 'Two', 'Three'];

  date = new UntypedFormControl(new Date());
  serializedDate = new UntypedFormControl(new Date().toISOString());
}
