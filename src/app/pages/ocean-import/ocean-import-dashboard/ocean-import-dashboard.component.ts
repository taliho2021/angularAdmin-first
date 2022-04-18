import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ocean-import-dashboard',
  templateUrl: './ocean-import-dashboard.component.html',
  styleUrls: ['./ocean-import-dashboard.component.scss']
})
export class OceanImportDashboardComponent implements OnInit {
  date1 = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
