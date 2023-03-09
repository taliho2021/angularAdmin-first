import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-air-export-detail',
    templateUrl: './air-export-detail.component.html',
    styleUrls: ['./air-export-detail.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class AirExportDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
