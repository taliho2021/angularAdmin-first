import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Login02Component } from './login02/login02.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { RecoverpwdComponent } from './recoverpwd/recoverpwd.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NgbAlertModule,
        MatCardModule,
        MatInputModule,
        FlexLayoutModule,
        MatToolbarModule,
        AuthRoutingModule,
        RecoverpwdComponent,
        ProfileComponent,
        Login02Component,
        FooterComponent,
        HeaderComponent
    ],
    exports: [RecoverpwdComponent, ProfileComponent, Login02Component]
})
export class AuthModule {}
