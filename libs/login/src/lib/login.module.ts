import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {loginRoutes} from './lib.routes';
import {LoginMainComponent} from './login-main/login-main.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {LoginService} from "@judge-system-ng/api";
import {NzNotificationService} from "ng-zorro-antd/notification";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(loginRoutes), RouterModule, NzFormModule, NzInputModule, NzButtonModule, ReactiveFormsModule, HttpClientModule],
  declarations: [LoginMainComponent],
  providers: [LoginService, NzNotificationService]
})
export class LoginModule {
}
