import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtrapagesRoutingModule } from './extrapages-routing.module';
import { ExtrapagesComponent } from './extrapages.component';
import { Page404Component } from './page404/page404.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';


@NgModule({
  declarations: [
    ExtrapagesComponent,
    Page404Component,
    ComingsoonComponent
  ],
  imports: [
    CommonModule,
    ExtrapagesRoutingModule
  ]
})
export class ExtrapagesModule { }
