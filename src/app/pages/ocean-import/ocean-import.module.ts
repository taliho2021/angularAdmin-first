import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { OceanImportComponent } from './ocean-import.component';
import { OceanImportRoutingModule } from './ocean-import-routing.module';

@NgModule({
  declarations: [
    OceanImportComponent
  ],
  imports: [
    CommonModule,
    OceanImportRoutingModule,
    MatTabsModule,
    MatCardModule
  ]
})
export class OceanImportModule { }
