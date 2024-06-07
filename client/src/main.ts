import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from '@app/app.routes';
import { AppComponent } from '@app/app.component';
import { AuthInterceptor } from '@services/auth-interceptor.service';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(RouterModule.forRoot(routes)),
        provideAnimationsAsync(),
        provideHttpClient(),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
}).catch(err => console.error(err));
