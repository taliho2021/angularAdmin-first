import { Component, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-entry-detail',
    templateUrl: './entry-detail.component.html',
    styleUrls: ['./entry-detail.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, NgbDropdownModule]
})
export class EntryDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
