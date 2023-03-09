import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ocean-import',
    templateUrl: './ocean-import.component.html',
    styleUrls: ['./ocean-import.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class OceanImportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
