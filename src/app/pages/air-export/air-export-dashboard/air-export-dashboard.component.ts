import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PolarChartComponent } from '../../../widgets/polar-chart/polar-chart.component';
import { BrushChartComponent } from '../../../widgets/brush-chart/brush-chart.component';
import { BarChartComponent } from '../../../widgets/bar-chart/bar-chart.component';
import { MatDividerModule } from '@angular/material/divider';
import { MonthlySummaryComponent } from '../../../widgets/monthly-summary/monthly-summary.component';
import { Todo02Component } from '../../../widgets/todo02/todo02.component';
import { TodoListComponent } from '../../../widgets/todo-list/todo-list.component';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout/flex';

@Component({
    selector: 'app-air-export-dashboard',
    templateUrl: './air-export-dashboard.component.html',
    styleUrls: ['./air-export-dashboard.component.scss'],
    standalone: true,
    imports: [FlexModule, MatCardModule, TodoListComponent, Todo02Component, MonthlySummaryComponent, MatDividerModule, BarChartComponent, BrushChartComponent, PolarChartComponent, DatePipe]
})
export class AirExportDashboardComponent implements OnInit {
  date1 = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
