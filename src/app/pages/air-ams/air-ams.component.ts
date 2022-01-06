import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-air-ams',
  templateUrl: './air-ams.component.html',
  styleUrls: ['./air-ams.component.scss']
})
export class AirAmsComponent {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
}
