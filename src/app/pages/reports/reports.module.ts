import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportsComponent } from './reports.component';
import { ReportsRoutingModule } from './reports-routing.module';

@NgModule({
    imports: [CommonModule, MatCardModule, NgbModule, ReportsRoutingModule, ReportsComponent]
})
export class ReportsModule {}
