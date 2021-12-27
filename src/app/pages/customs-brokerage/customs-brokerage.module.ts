import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomsBrokerageRoutingModule } from './customs-brokerage-routing.module';
import { CustomsBrokerageComponent } from './customs-brokerage.component';


@NgModule({
  declarations: [
    CustomsBrokerageComponent
  ],
  imports: [
    CommonModule,
    CustomsBrokerageRoutingModule
  ]
})
export class CustomsBrokerageModule { }
