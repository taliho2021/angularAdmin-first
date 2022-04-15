import { RouterModule, Routes } from '@angular/router';

import { AeFormComponent } from './ae-form/ae-form.component';
import { ApexChartComponent } from '../widgets/apex-chart/apex-chart.component';
import { BarChartComponent } from '../widgets/bar-chart/bar-chart.component';
import { BrushChartComponent } from '../widgets/brush-chart/brush-chart.component';
import { BubbleChartComponent } from '../widgets/bubble-chart/bubble-chart.component';
import { Chart01Component } from './chart01/chart01.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { DonutChartComponent } from '../widgets/donut-chart/donut-chart.component';
import { DonutMonochromeComponent } from '../widgets/donut-monochrome/donut-monochrome.component';
import { ExtrapagesComponent } from './extrapages.component';
import { IsfFormComponent } from './isf-form/isf-form.component';
import { NgModule } from '@angular/core';
import { Page404Component } from './page404/page404.component';
import { RadarChartComponent } from '../widgets/radar-chart/radar-chart.component';

const routes: Routes = [
  { path: '', component: ExtrapagesComponent },
  { path: '404', component: Page404Component},
  { path: 'coming-soon', component: ComingsoonComponent},
  { path: 'isf', component: IsfFormComponent },
  { path: 'ae', component: AeFormComponent},
  { path: 'chart01', component: Chart01Component},
  { path: 'bar', component: BarChartComponent},
  { path: 'bubble', component: BubbleChartComponent},
  { path: 'radar', component: RadarChartComponent},
  { path: 'apex', component: ApexChartComponent},
  { path: 'brush', component: BrushChartComponent},
  { path: 'donut', component: DonutChartComponent},
  { path: 'donut-mono', component: DonutMonochromeComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtrapagesRoutingModule { }
