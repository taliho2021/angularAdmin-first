import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-isf-form',
    templateUrl: './isf-form.component.html',
    styleUrls: ['./isf-form.component.scss'],
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatIconModule, FlexModule, MatCardModule]
})
export class IsfFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
