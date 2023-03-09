import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-air-export',
    templateUrl: './air-export.component.html',
    styleUrls: ['./air-export.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class AirExportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
