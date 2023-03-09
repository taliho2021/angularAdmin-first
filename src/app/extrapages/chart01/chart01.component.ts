import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MultiYComponent } from '../../widgets/multi-y/multi-y.component';
import { PolarChartComponent } from '../../widgets/polar-chart/polar-chart.component';
import { DonutMonochromeComponent } from '../../widgets/donut-monochrome/donut-monochrome.component';
import { DonutChartComponent } from '../../widgets/donut-chart/donut-chart.component';
import { BrushChartComponent } from '../../widgets/brush-chart/brush-chart.component';
import { ApexChartComponent } from '../../widgets/apex-chart/apex-chart.component';
import { RadarChartComponent } from '../../widgets/radar-chart/radar-chart.component';
import { BubbleChartComponent } from '../../widgets/bubble-chart/bubble-chart.component';
import { BarChartComponent } from '../../widgets/bar-chart/bar-chart.component';
import { MonthlySummaryComponent } from '../../widgets/monthly-summary/monthly-summary.component';
import { Todo02Component } from '../../widgets/todo02/todo02.component';
import { TodoListComponent } from '../../widgets/todo-list/todo-list.component';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout/flex';

@Component({
    selector: 'app-chart01',
    templateUrl: './chart01.component.html',
    styleUrls: ['./chart01.component.scss'],
    standalone: true,
    imports: [FlexModule, MatCardModule, TodoListComponent, Todo02Component, MonthlySummaryComponent, BarChartComponent, BubbleChartComponent, RadarChartComponent, ApexChartComponent, BrushChartComponent, DonutChartComponent, DonutMonochromeComponent, PolarChartComponent, MultiYComponent, DatePipe]
})

export class Chart01Component implements OnInit {
  date1 = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
