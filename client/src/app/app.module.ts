import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '@app/app.routes';
import { MaterialModule } from '@app/material.module';
import { SidebarComponent } from '@components/sidebar/sidebar.component';
import { AuthService } from '@services/auth.service';
import { AuthInterceptor } from '@services/auth-interceptor.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AppRoutingModule,
        MaterialModule,
        SidebarComponent
    ],
    exports: [CommonModule, AppRoutingModule, MaterialModule, SidebarComponent],
    providers: [
        AuthService,
        {
            provide: 'HTTP_INTERCEPTORS',
            useClass: AuthInterceptor,
            multi: true
        }
    ]
})
export class AppModule { }
