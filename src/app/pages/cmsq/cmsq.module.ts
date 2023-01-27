import { CmsqComponent } from './cmsq.component';
import { CmsqRoutingModule } from './cmsq-routing.module';
import { CommonModule } from '@angular/common';
import { Grid01Component } from './grid01/grid01.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CmsqComponent, Grid01Component],
  imports: [
    CommonModule,
    CmsqRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatTableModule,
  ],
})
export class CmsqModule {}
