import { Component, OnInit } from '@angular/core';

import { UntypedFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgClass } from '@angular/common';

@Component({
    selector: 'app-todo02',
    templateUrl: './todo02.component.html',
    styleUrls: ['./todo02.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, NgFor, NgClass]
})
export class Todo02Component implements OnInit {

  completed: boolean = false;
  taskList: any[] = []
  newTodoForm = this.formBuilder.group({
    todoItem: ''
  })

  constructor(
    private formBuilder: UntypedFormBuilder
  ) { }



  addTask() {
    const value = this.newTodoForm.value.todoItem
    this.taskList.push({ id: this.taskList.length, name: value })
    window.localStorage.setItem('task', JSON.stringify(this.taskList))
    this.newTodoForm.reset();

  }

  removeTask(i: any) {
    this.taskList.splice(i, 1)
    window.localStorage.setItem('task', JSON.stringify(this.taskList))

  }

  markDone(value: any) {
    value.completed = !value.completed
    value.completed === true ?
      this.taskList.push(this.taskList.splice(this.taskList.indexOf(value), 1)[0]) :
      this.taskList.unshift(this.taskList.splice(this.taskList.indexOf(value), 1)[0])
  }



  ngOnInit(): void {
    this.taskList = window.localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')!) : []
  }

}
function todoItem(todoItem: any) {
  throw new Error('Function not implemented.');
}
