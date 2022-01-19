import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { SeaAmsComponent } from './sea-ams.component';
import { SeaAmsRoutingModule } from './sea-ams-routing.module';

@NgModule({
  declarations: [
    SeaAmsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SeaAmsRoutingModule
  ]
})
export class SeaAmsModule { }
