import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { HorizontaltopbarComponent } from './horizontaltopbar/horizontaltopbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TranslateModule } from'@ngx-translate/core';
import { VerticalComponent } from './vertical/vertical.component';
@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    HorizontalComponent,
    HorizontaltopbarComponent,
    RightsidebarComponent,
    TopbarComponent,
    VerticalComponent,
    SidebarComponent
   ],

    imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
})
export class LayoutsModule { }
