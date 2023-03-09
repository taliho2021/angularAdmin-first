import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-extrapages',
    templateUrl: './extrapages.component.html',
    styleUrls: ['./extrapages.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class ExtrapagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
