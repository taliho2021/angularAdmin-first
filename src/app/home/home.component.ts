import { Component } from '@angular/core';

import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [MatSidenavModule, HeaderComponent, RouterOutlet]
})
export class HomeComponent {
  title = 'admin-panel-layout';
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}

const squareOdd = of(1, 2, 3, 4, 5, 6).pipe(
  filter(n => n % 2 !== 0), map((n) => n * n)
);

squareOdd.subscribe((x) => console.log(x));
