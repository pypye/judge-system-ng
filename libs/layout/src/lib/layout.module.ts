import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { layoutRoutes } from './lib.routes';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { MainContentComponent } from './main-content/main-content.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { AuthService, LogoutService } from '@judge-system-ng/api';
import { Page404Component } from './page-404/page-404.component';
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzIconModule} from "ng-zorro-antd/icon";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(layoutRoutes),
    RouterModule,
    NzButtonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzAvatarModule,
    NzDropDownModule,
    NzDividerModule,
    NzIconModule,
  ],
  declarations: [MainLayoutComponent, MainContentComponent, Page404Component],
  exports: [MainLayoutComponent, MainContentComponent],
  providers: [LogoutService, AuthService],
})
export class LayoutModule {}
