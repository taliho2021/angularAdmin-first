import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-page404',
    templateUrl: './page404.component.html',
    styleUrls: ['./page404.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class Page404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
