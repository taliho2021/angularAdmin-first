import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-air-import-dashboard',
  templateUrl: './air-import-dashboard.component.html',
  styleUrls: ['./air-import-dashboard.component.scss']
})
export class AirImportDashboardComponent implements OnInit {
  date1 = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
