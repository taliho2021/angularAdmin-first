import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sea-ams',
  templateUrl: './sea-ams.component.html',
  styleUrls: ['./sea-ams.component.scss']
})
export class SeaAmsComponent  {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

}
