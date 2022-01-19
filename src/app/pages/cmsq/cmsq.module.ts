import { CmsqComponent } from './cmsq.component';
import { CmsqRoutingModule } from './cmsq-routing.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CmsqComponent
  ],
  imports: [
    CommonModule,
    CmsqRoutingModule,
    MatTabsModule,
    MatCardModule
  ]
})
export class CmsqModule { }
