import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {ErrorInterceptor} from './core/helpers/error.interceptor';
import {JwtInterceptor} from './core/helpers/jwt.interceptor';
import {FakeBackendProvider} from './core/helpers/fake-backend';

import {LayoutsModule} from './layouts/layouts.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ToastrModule} from 'ngx-toastr';
import {ExcelService} from './core/services/ExcelService';
import {PdfViewerModule} from 'ng2-pdf-viewer';


@NgModule({
    declarations: [
        AppComponent,
    
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LayoutsModule,
        AppRoutingModule,
        ToastrModule.forRoot(),
        PdfViewerModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

        // provider used to create fake backend
        FakeBackendProvider,
        ExcelService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
