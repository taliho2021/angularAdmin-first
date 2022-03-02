import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AeFormComponent } from './ae-form/ae-form.component';
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
import { NgModule } from '@angular/core';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    ExtrapagesComponent,
    Page404Component,
    ComingsoonComponent,
    IsfFormComponent,
    AeFormComponent
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
    ExtrapagesRoutingModule
  ]
})
export class ExtrapagesModule { }
