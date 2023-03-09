import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BarChartComponent } from '../../../widgets/bar-chart/bar-chart.component';
import { BubbleChartComponent } from '../../../widgets/bubble-chart/bubble-chart.component';
import { BrushChartComponent } from '../../../widgets/brush-chart/brush-chart.component';
import { MonthlySummaryComponent } from '../../../widgets/monthly-summary/monthly-summary.component';
import { Todo02Component } from '../../../widgets/todo02/todo02.component';
import { TodoListComponent } from '../../../widgets/todo-list/todo-list.component';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout/flex';

@Component({
    selector: 'app-ocean-import-dashboard',
    templateUrl: './ocean-import-dashboard.component.html',
    styleUrls: ['./ocean-import-dashboard.component.scss'],
    standalone: true,
    imports: [FlexModule, MatCardModule, TodoListComponent, Todo02Component, MonthlySummaryComponent, BrushChartComponent, BubbleChartComponent, BarChartComponent, DatePipe]
})
export class OceanImportDashboardComponent implements OnInit {
  date1 = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
