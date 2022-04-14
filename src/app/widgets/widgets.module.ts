import { RouterModule, Routes } from '@angular/router';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { ChartsComponent } from './charts/charts.component';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { ReactiveFormsModule } from '@angular/forms';
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
    RadarChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoComponent,
    TodoListComponent,
    ChartsComponent,
    BarChartComponent,
    BubbleChartComponent,
    RadarChartComponent
  ],
})
export class WidgetsModule { }
