import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-truck-ams',
  templateUrl: './truck-ams.component.html',
  styleUrls: ['./truck-ams.component.scss']
})
export class TruckAmsComponent {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
}
