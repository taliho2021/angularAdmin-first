import { CommonModule } from '@angular/common';
import { IsfComponent } from './isf.component';
import { IsfRoutingModule } from './isf-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    IsfComponent
  ],
  imports: [
    CommonModule,
    IsfRoutingModule,
    MatTabsModule
  ]
})
export class IsfModule { }
