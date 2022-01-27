import { RouterModule, Routes } from '@angular/router';

import { ChartsComponent } from './charts/charts.component';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo-list/todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = []


@NgModule({
  declarations: [
    TodoListComponent,
    TodoComponent,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgChartsModule
  ],
  exports: [
    TodoComponent,
    ChartsComponent
  ],
})
export class WidgetsModule { }
