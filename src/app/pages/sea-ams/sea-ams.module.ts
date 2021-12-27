import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeaAmsRoutingModule } from './sea-ams-routing.module';
import { SeaAmsComponent } from './sea-ams.component';


@NgModule({
  declarations: [
    SeaAmsComponent
  ],
  imports: [
    CommonModule,
    SeaAmsRoutingModule
  ]
})
export class SeaAmsModule { }
