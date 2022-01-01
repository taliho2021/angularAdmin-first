import { AirImportComponent } from './air-import.component';
import { AirImportRoutingModule } from './air-import-routing.module';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AirImportComponent
  ],
  imports: [
    CommonModule,
    AirImportRoutingModule,
    MatTabsModule
  ]
})
export class AirImportModule { }
