import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart01',
  templateUrl: './chart01.component.html',
  styleUrls: ['./chart01.component.scss']
})

export class Chart01Component implements OnInit {
  date1 = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
