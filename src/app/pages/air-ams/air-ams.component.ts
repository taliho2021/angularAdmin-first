import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-air-ams',
  templateUrl: './air-ams.component.html',
  styleUrls: ['./air-ams.component.scss']
})
export class AirAmsComponent {

  myControl = new UntypedFormControl();
  options: string[] = ['One', 'Two', 'Three'];

  date = new UntypedFormControl(new Date());
  serializedDate = new UntypedFormControl(new Date().toISOString());
}
