import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationComponent } from './navigation/navigation.component';
import { NgModule } from '@angular/core';
import { PagesModule } from '../pages/pages.module';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    PagesModule,
    FlexLayoutModule,
    WidgetsModule
  ]
})
export class HomeModule { }
