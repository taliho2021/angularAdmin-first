import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ocean-export',
    templateUrl: './ocean-export.component.html',
    styleUrls: ['./ocean-export.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class OceanExportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
