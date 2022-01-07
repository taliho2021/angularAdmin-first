import { AirExportComponent } from './air-export.component';
import { AirExportRoutingModule } from './air-export-routing.module';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AirExportComponent
  ],
  imports: [
    CommonModule,
    AirExportRoutingModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AirExportModule { }
