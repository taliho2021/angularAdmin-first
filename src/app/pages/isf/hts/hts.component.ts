import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-hts',
    templateUrl: './hts.component.html',
    styleUrls: ['./hts.component.scss'],
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule]
})
export class HtsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
