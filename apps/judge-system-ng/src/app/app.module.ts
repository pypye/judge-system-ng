import {ApplicationConfig, NgModule} from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import {appRoutes} from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);
import {NZ_I18N, en_US} from 'ng-zorro-antd/i18n';
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
  ],
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    {provide: NZ_I18N, useValue: en_US},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
