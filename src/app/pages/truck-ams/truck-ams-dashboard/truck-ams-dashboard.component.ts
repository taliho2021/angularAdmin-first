import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-truck-ams-dashboard',
  templateUrl: './truck-ams-dashboard.component.html',
  styleUrls: ['./truck-ams-dashboard.component.scss']
})
export class TruckAmsDashboardComponent implements OnInit {
  date1 = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
