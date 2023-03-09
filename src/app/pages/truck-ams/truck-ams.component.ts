import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AmsDetailComponent } from './ams-detail/ams-detail.component';
import { AmsSummaryComponent } from './ams-summary/ams-summary.component';
import { TruckAmsDashboardComponent } from './truck-ams-dashboard/truck-ams-dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-truck-ams',
    templateUrl: './truck-ams.component.html',
    styleUrls: ['./truck-ams.component.scss'],
    standalone: true,
    imports: [MatTabsModule, TruckAmsDashboardComponent, AmsSummaryComponent, AmsDetailComponent, RouterLink]
})
export class TruckAmsComponent {
  myControl = new UntypedFormControl();
  options: string[] = ['One', 'Two', 'Three'];

  date = new UntypedFormControl(new Date());
  serializedDate = new UntypedFormControl(new Date().toISOString());
}
