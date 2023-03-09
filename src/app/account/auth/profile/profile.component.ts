import { Component, OnInit } from '@angular/core';
import { FlexModule } from '@angular/flex-layout/flex';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    standalone: true,
    imports: [NgIf, FlexModule, NgFor]
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor() { }

  ngOnInit(): void {
  }

}
