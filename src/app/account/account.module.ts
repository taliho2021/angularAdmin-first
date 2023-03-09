import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';

@NgModule({
    exports: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        AuthModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDividerModule,
        MatInputModule,
        ReactiveFormsModule,
        RegisterComponent
    ]
})
export class AccountModule { }
