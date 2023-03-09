import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BrushChartComponent } from '../../../widgets/brush-chart/brush-chart.component';
import { DonutMonochromeComponent } from '../../../widgets/donut-monochrome/donut-monochrome.component';
import { ApexChartComponent } from '../../../widgets/apex-chart/apex-chart.component';
import { MonthlySummaryComponent } from '../../../widgets/monthly-summary/monthly-summary.component';
import { Todo02Component } from '../../../widgets/todo02/todo02.component';
import { TodoListComponent } from '../../../widgets/todo-list/todo-list.component';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout/flex';

@Component({
    selector: 'app-air-import-dashboard',
    templateUrl: './air-import-dashboard.component.html',
    styleUrls: ['./air-import-dashboard.component.scss'],
    standalone: true,
    imports: [FlexModule, MatCardModule, TodoListComponent, Todo02Component, MonthlySummaryComponent, ApexChartComponent, DonutMonochromeComponent, BrushChartComponent, DatePipe]
})
export class AirImportDashboardComponent implements OnInit {
  date1 = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
