import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-air-import-detail',
    templateUrl: './air-import-detail.component.html',
    styleUrls: ['./air-import-detail.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class AirImportDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
