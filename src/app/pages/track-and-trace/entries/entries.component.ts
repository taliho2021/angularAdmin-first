import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-entries',
    templateUrl: './entries.component.html',
    styleUrls: ['./entries.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class EntriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
