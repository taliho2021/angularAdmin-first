import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-sea-ams',
  templateUrl: './sea-ams.component.html',
  styleUrls: ['./sea-ams.component.scss']
})
export class SeaAmsComponent  {
  myControl = new UntypedFormControl();
  options: string[] = ['One', 'Two', 'Three'];

  date = new UntypedFormControl(new Date());
  serializedDate = new UntypedFormControl(new Date().toISOString());

}
