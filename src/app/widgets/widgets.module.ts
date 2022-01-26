import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo-list/todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = []




@NgModule({
  declarations: [
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class WidgetsModule { }
