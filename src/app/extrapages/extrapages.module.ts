import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AeFormComponent } from './ae-form/ae-form.component';
import { Chart01Component } from './chart01/chart01.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { CommonModule } from '@angular/common';
import { ExtrapagesComponent } from './extrapages.component';
import { ExtrapagesRoutingModule } from './extrapages-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IsfFormComponent } from './isf-form/isf-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { Page404Component } from './page404/page404.component';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  declarations: [
    ExtrapagesComponent,
    Page404Component,
    ComingsoonComponent,
    IsfFormComponent,
    AeFormComponent,
    Chart01Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    NgChartsModule,
    WidgetsModule,
    ExtrapagesRoutingModule,

  ]
})
export class ExtrapagesModule { }
