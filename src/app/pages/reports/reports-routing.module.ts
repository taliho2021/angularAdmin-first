import { RouterModule, Routes } from '@angular/router';

import { EntryComponent } from './entry/entry.component';
import { ExamComponent } from './exam/exam.component';
import { LiquidationComponent } from './liquidation/liquidation.component';
import { NgModule } from '@angular/core';
import { ProfitByCustomerComponent } from './profit-by-customer/profit-by-customer.component';
import { ProfitByImporterComponent } from './profit-by-importer/profit-by-importer.component';
import { ProfitBySalesmanComponent } from './profit-by-salesman/profit-by-salesman.component';
import { ReportsComponent } from './reports.component';

const routes: Routes = [{ path: '', component: ReportsComponent,
                          children: [
                            {path:'entry', component: EntryComponent},
                            {path: 'liquidation', component: LiquidationComponent},
                            {path: 'exam', component: ExamComponent},
                            {path: 'pnlbyImporter', component: ProfitByImporterComponent},
                            {path: 'pnlbySalesman', component: ProfitBySalesmanComponent},
                            {path: 'pnlbyCustomer', component: ProfitByCustomerComponent}
                          ]
                         }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
