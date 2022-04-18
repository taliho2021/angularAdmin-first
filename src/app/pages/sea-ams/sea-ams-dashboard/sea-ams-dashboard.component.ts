import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sea-ams-dashboard',
  templateUrl: './sea-ams-dashboard.component.html',
  styleUrls: ['./sea-ams-dashboard.component.scss']
})
export class SeaAmsDashboardComponent implements OnInit {
  date1 = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
