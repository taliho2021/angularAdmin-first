import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { HorizontaltopbarComponent } from './horizontaltopbar/horizontaltopbar.component';
import { NgModule } from '@angular/core';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { VerticalComponent } from './vertical/vertical.component';

@NgModule({
  declarations: [
    FooterComponent,
    HorizontalComponent,
    HorizontaltopbarComponent,
    RightsidebarComponent,
    SidebarComponent,
    TopbarComponent,
    VerticalComponent ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
