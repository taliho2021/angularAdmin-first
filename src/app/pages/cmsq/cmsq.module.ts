import { CmsqComponent } from './cmsq.component';
import { CmsqRoutingModule } from './cmsq-routing.module';
import { CommonModule } from '@angular/common';
import { Grid01Component } from './grid01/grid01.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
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
    MatGridListModule,
    MatCheckboxModule,
    MatTableModule
  ]
})
export class CmsqModule { }
