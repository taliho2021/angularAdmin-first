import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-air-ams-dashboard',
  templateUrl: './air-ams-dashboard.component.html',
  styleUrls: ['./air-ams-dashboard.component.scss']
})
export class AirAmsDashboardComponent implements OnInit {
  date1 = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
