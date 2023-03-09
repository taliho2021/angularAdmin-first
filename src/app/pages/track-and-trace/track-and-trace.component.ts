import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';

@Component({
    selector: 'app-track-and-trace',
    templateUrl: './track-and-trace.component.html',
    styleUrls: ['./track-and-trace.component.scss'],
    standalone: true,
    imports: [MatChipsModule, RouterLink, RouterLinkActive, RouterOutlet]
})
export class TrackAndTraceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
