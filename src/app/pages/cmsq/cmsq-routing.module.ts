import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsqComponent } from './cmsq.component';

const routes: Routes = [{ path: '', component: CmsqComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsqRoutingModule { }
