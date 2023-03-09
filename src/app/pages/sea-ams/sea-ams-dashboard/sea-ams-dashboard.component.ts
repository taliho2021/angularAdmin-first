import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PolarChartComponent } from '../../../widgets/polar-chart/polar-chart.component';
import { DonutChartComponent } from '../../../widgets/donut-chart/donut-chart.component';
import { BarChartComponent } from '../../../widgets/bar-chart/bar-chart.component';
import { MonthlySummaryComponent } from '../../../widgets/monthly-summary/monthly-summary.component';
import { Todo02Component } from '../../../widgets/todo02/todo02.component';
import { TodoListComponent } from '../../../widgets/todo-list/todo-list.component';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout/flex';

@Component({
    selector: 'app-sea-ams-dashboard',
    templateUrl: './sea-ams-dashboard.component.html',
    styleUrls: ['./sea-ams-dashboard.component.scss'],
    standalone: true,
    imports: [FlexModule, MatCardModule, TodoListComponent, Todo02Component, MonthlySummaryComponent, BarChartComponent, DonutChartComponent, PolarChartComponent, DatePipe]
})
export class SeaAmsDashboardComponent implements OnInit {
  date1 = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
