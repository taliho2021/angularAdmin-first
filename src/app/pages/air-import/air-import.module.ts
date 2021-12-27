import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirImportRoutingModule } from './air-import-routing.module';
import { AirImportComponent } from './air-import.component';


@NgModule({
  declarations: [
    AirImportComponent
  ],
  imports: [
    CommonModule,
    AirImportRoutingModule
  ]
})
export class AirImportModule { }
