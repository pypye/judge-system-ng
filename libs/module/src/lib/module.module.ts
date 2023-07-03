import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuickSubmitComponent} from './quick-submit/quick-submit.component';
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzAlertModule} from "ng-zorro-antd/alert";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzFormModule} from "ng-zorro-antd/form";
import {HttpClientModule} from "@angular/common/http";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {QuickSubmitService} from "@judge-system-ng/api";

@NgModule({
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzUploadModule,
    NzButtonModule,
    NzIconModule,
    NzAlertModule,
    CommonModule,
    NzLayoutModule,
    NzGridModule,
    NzFormModule,
    HttpClientModule,
  ],
  declarations: [QuickSubmitComponent],
  exports: [
    QuickSubmitComponent
  ],
  providers: [
    NzNotificationService,
    QuickSubmitService
  ],
})
export class ModuleModule {
}
