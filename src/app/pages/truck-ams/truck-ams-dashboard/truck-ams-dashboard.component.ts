import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MultiYComponent } from '../../../widgets/multi-y/multi-y.component';
import { BubbleChartComponent } from '../../../widgets/bubble-chart/bubble-chart.component';
import { BarChartComponent } from '../../../widgets/bar-chart/bar-chart.component';
import { MonthlySummaryComponent } from '../../../widgets/monthly-summary/monthly-summary.component';
import { Todo02Component } from '../../../widgets/todo02/todo02.component';
import { TodoListComponent } from '../../../widgets/todo-list/todo-list.component';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout/flex';

@Component({
    selector: 'app-truck-ams-dashboard',
    templateUrl: './truck-ams-dashboard.component.html',
    styleUrls: ['./truck-ams-dashboard.component.scss'],
    standalone: true,
    imports: [FlexModule, MatCardModule, TodoListComponent, Todo02Component, MonthlySummaryComponent, BarChartComponent, BubbleChartComponent, MultiYComponent, DatePipe]
})
export class TruckAmsDashboardComponent implements OnInit {
  date1 = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
