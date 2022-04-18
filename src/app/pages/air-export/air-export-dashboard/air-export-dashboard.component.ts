import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-air-export-dashboard',
  templateUrl: './air-export-dashboard.component.html',
  styleUrls: ['./air-export-dashboard.component.scss']
})
export class AirExportDashboardComponent implements OnInit {
  date1 = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
