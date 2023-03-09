import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive, RouterOutlet]
})
export class TablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
