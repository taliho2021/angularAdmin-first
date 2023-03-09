import { ApexChart, ApexFill, ApexNonAxisChartSeries, ApexResponsive, ApexStroke, NgApexchartsModule } from "ng-apexcharts";
import { Component, ViewChild } from "@angular/core";

import { ChartComponent } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  stroke: ApexStroke;
  fill: ApexFill;
};


@Component({
    selector: 'app-polar-chart',
    templateUrl: './polar-chart.component.html',
    styleUrls: ['./polar-chart.component.scss'],
    standalone: true,
    imports: [NgApexchartsModule]
})
export class PolarChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      chart: {
        type: "polarArea"
      },
      stroke: {
        colors: ["#fff"]
      },
      fill: {
        opacity: 0.8
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}

