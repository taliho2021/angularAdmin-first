import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AmsDetailComponent } from './ams-detail/ams-detail.component';
import { AmsSummaryComponent } from './ams-summary/ams-summary.component';
import { SeaAmsDashboardComponent } from './sea-ams-dashboard/sea-ams-dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-sea-ams',
    templateUrl: './sea-ams.component.html',
    styleUrls: ['./sea-ams.component.scss'],
    standalone: true,
    imports: [MatTabsModule, SeaAmsDashboardComponent, AmsSummaryComponent, AmsDetailComponent, RouterLink]
})
export class SeaAmsComponent  {
  myControl = new UntypedFormControl();
  options: string[] = ['One', 'Two', 'Three'];

  date = new UntypedFormControl(new Date());
  serializedDate = new UntypedFormControl(new Date().toISOString());

}
