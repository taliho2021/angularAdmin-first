import { CmsqComponent } from './cmsq.component';
import { CmsqRoutingModule } from './cmsq-routing.module';
import { CommonModule } from '@angular/common';
import { Grid01Component } from './grid01/grid01.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CmsqComponent,
    Grid01Component
  ],
  imports: [
    CommonModule,
    CmsqRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class CmsqModule { }
