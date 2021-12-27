import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OceanImportRoutingModule } from './ocean-import-routing.module';
import { OceanImportComponent } from './ocean-import.component';


@NgModule({
  declarations: [
    OceanImportComponent
  ],
  imports: [
    CommonModule,
    OceanImportRoutingModule
  ]
})
export class OceanImportModule { }
