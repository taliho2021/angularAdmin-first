import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-trucking',
    templateUrl: './trucking.component.html',
    styleUrls: ['./trucking.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive, MatButtonModule, RouterOutlet, MatCardModule]
})
export class TruckingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
