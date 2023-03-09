import { Component, OnInit } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';

@Component({
    selector: 'app-radar-chart',
    templateUrl: './radar-chart.component.html',
    styleUrls: ['./radar-chart.component.scss'],
    standalone: true,
    imports: [NgChartsModule]
})
export class RadarChartComponent implements OnInit {
  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartData = [
    {data: [120, 130, 180, 70], label: '2017'},
    {data: [90, 150, 200, 45], label: '2018'}
  ];
  public radarChartType = 'radar';
  constructor() { }
  ngOnInit() {
  }
}
