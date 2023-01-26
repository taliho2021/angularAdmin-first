import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExtrapagesModule } from './extrapages/extrapages.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeModule } from './home/home.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { TranslateModule } from '@ngx-translate/core';
import { WidgetsModule } from './widgets/widgets.module';
import { Dashboard02Component } from './dashboard02/dashboard02.component';

import 'ag-grid-enterprise';

@NgModule({
  declarations: [AppComponent, DashboardComponent, Dashboard02Component],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgGridModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    AppRoutingModule,
    PagesModule,
    ExtrapagesModule,
    HomeModule,
    LayoutModule,
    WidgetsModule,
    NgChartsModule,
    TranslateModule.forRoot(),
  ],

  exports: [MatIconModule, MatSidenavModule, MatToolbarModule],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
