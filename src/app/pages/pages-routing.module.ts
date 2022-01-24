import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';

const routes: Routes = [{ path: '', component: PagesComponent},
            
                              { path: 'isf', loadChildren: () => import('./isf/isf.module').then(m => m.IsfModule) },
                              { path: 'airAms', loadChildren: () => import('./air-ams/air-ams.module').then(m => m.AirAmsModule) },
                              { path: 'seaAms', loadChildren: () => import('./sea-ams/sea-ams.module').then(m => m.SeaAmsModule) },
                              { path: 'truckAms', loadChildren: () => import('./truck-ams/truck-ams.module').then(m => m.TruckAmsModule) },
                              { path: 'airExport', loadChildren: () => import('./air-export/air-export.module').then(m => m.AirExportModule) },
                              { path: 'oceanExport', loadChildren: () => import('./ocean-export/ocean-export.module').then(m => m.OceanExportModule) },
                              { path: 'airImport', loadChildren: () => import('./air-import/air-import.module').then(m => m.AirImportModule) },
                              { path: 'oceanImport', loadChildren: () => import('./ocean-import/ocean-import.module').then(m => m.OceanImportModule) },
                              { path: 'customsBrokerage', loadChildren: () => import('./customs-brokerage/customs-brokerage.module').then(m => m.CustomsBrokerageModule) },
                              { path: 'trucking', loadChildren: () => import('./trucking/trucking.module').then(m => m.TruckingModule) },
                              { path: 'cmsq', loadChildren: () => import('./cmsq/cmsq.module').then(m => m.CmsqModule) },
                              { path: 'trackAndTrace', loadChildren: () => import('./track-and-trace/track-and-trace.module').then(m => m.TrackAndTraceModule) },
                              { path: 'parties', loadChildren: () => import('./parties/parties.module').then(m => m.PartiesModule) },
                              { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
                              { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) }
                      
                    ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
