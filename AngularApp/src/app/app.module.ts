import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent, SimpleLayoutComponent } from './containers';


const APP_CONTAINERS = [
  DefaultLayoutComponent,
  SimpleLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SharedModule } from './shared/shared.module';
import { AppErrorHandler } from './common/app-error';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AuthService } from './services/auth.service';
import { LoginAuth } from './services/auths/LoginAuth';
import { Http, HttpModule } from '@angular/http';
import { AuthGard } from './services/auth-gard.service';
import { HttpClientModule } from '@angular/common/http';
export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token'
  }), http);
}
@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  },
    AuthService,
    AuthGard,
    LoginAuth,
    AuthHttp,
  {
    provide: ErrorHandler, useClass: AppErrorHandler
  },
  {
    provide: AuthHttp,
    useFactory: getAuthHttp,
    deps: [Http]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
