import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ocean-export-dashboard',
  templateUrl: './ocean-export-dashboard.component.html',
  styleUrls: ['./ocean-export-dashboard.component.scss']
})
export class OceanExportDashboardComponent implements OnInit {
  date1 = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
