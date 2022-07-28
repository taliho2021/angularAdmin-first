import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-truck-ams',
  templateUrl: './truck-ams.component.html',
  styleUrls: ['./truck-ams.component.scss']
})
export class TruckAmsComponent {
  myControl = new UntypedFormControl();
  options: string[] = ['One', 'Two', 'Three'];

  date = new UntypedFormControl(new Date());
  serializedDate = new UntypedFormControl(new Date().toISOString());
}
