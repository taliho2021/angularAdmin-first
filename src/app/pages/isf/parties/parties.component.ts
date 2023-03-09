import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { DomesticComponent } from '../domestic/domestic.component';
import { ForeignComponent } from '../foreign/foreign.component';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout/flex';

@Component({
    selector: 'app-parties',
    templateUrl: './parties.component.html',
    styleUrls: ['./parties.component.scss'],
    standalone: true,
    imports: [FlexModule, MatCardModule, ForeignComponent, DomesticComponent, MatDividerModule]
})
export class PartiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
