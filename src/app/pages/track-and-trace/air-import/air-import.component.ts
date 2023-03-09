import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-air-import',
    templateUrl: './air-import.component.html',
    styleUrls: ['./air-import.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class AirImportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
