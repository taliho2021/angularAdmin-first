import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsqRoutingModule } from './cmsq-routing.module';
import { CmsqComponent } from './cmsq.component';


@NgModule({
  declarations: [
    CmsqComponent
  ],
  imports: [
    CommonModule,
    CmsqRoutingModule
  ]
})
export class CmsqModule { }
