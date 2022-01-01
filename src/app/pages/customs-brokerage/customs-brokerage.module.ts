import { CommonModule } from '@angular/common';
import { CustomsBrokerageComponent } from './customs-brokerage.component';
import { CustomsBrokerageRoutingModule } from './customs-brokerage-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CustomsBrokerageComponent
  ],
  imports: [
    CommonModule,
    CustomsBrokerageRoutingModule,
    MatIconModule,
    MatTabsModule
  ]
})
export class CustomsBrokerageModule { }
