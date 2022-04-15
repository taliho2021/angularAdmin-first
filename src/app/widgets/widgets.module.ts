import { RouterModule, Routes } from '@angular/router';

import { ApexChartComponent } from './apex-chart/apex-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BrushChartComponent } from './brush-chart/brush-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { ChartsComponent } from './charts/charts.component';
import { CommonModule } from '@angular/common';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { DonutMonochromeComponent } from './donut-monochrome/donut-monochrome.component';
import { MonthlySummaryComponent } from './monthly-summary/monthly-summary.component';
import { MultiYComponent } from './multi-y/multi-y.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Todo02Component } from './todo02/todo02.component';
import { TodoComponent } from './todo-list/todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = []


@NgModule({
  declarations: [
    TodoListComponent,
    TodoComponent,
    ChartsComponent,
    BarChartComponent,
    BubbleChartComponent,
    RadarChartComponent,
    ApexChartComponent,
    BrushChartComponent,
    DonutChartComponent,
    DonutMonochromeComponent,
    PolarChartComponent,
    MultiYComponent,
    Todo02Component,
    MonthlySummaryComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    ReactiveFormsModule,
    NgApexchartsModule
  ],

  exports: [
    TodoComponent,
    TodoListComponent,
    ChartsComponent,
    BarChartComponent,
    BubbleChartComponent,
    RadarChartComponent,
    BrushChartComponent,
    DonutChartComponent,
    DonutMonochromeComponent,
    ApexChartComponent,
    PolarChartComponent,
    MultiYComponent,
    Todo02Component,
    MonthlySummaryComponent
  ],

})
export class WidgetsModule { }
