import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {problemsetsRoutes} from './lib.routes';
import {ProblemListComponent} from './problem-list/problem-list.component';
import {ProblemSubmitComponent} from './problem-submit/problem-submit.component';
import {ProblemHistoryComponent} from './problem-history/problem-history.component';
import {ProblemDetailComponent} from './problem-detail/problem-detail.component';
import {LayoutModule} from '@judge-system-ng/layout';
import {ProblemListTableComponent} from './problem-list/problem-list-table/problem-list-table.component';
import {NzTableModule} from 'ng-zorro-antd/table';
import {HttpClientModule} from '@angular/common/http';
import {
  ProblemDetailService, ProblemHistoryPreviewService,
  ProblemHistoryService,
  ProblemListService,
} from '@judge-system-ng/api';
import {ModuleModule} from '@judge-system-ng/module';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {ProblemHistoryTableComponent} from './problem-history/problem-history-table/problem-history-table.component';
import {ProblemSubmitMainComponent} from './problem-submit/problem-submit-main/problem-submit-main.component';
import {MonacoEditorModule} from 'ngx-monaco-editor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {ProblemDetailMainComponent} from './problem-detail/problem-detail-main/problem-detail-main.component';
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {MarkdownModule} from "ngx-markdown";
import {PipeModule} from "@judge-system-ng/pipe";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzIconModule} from "ng-zorro-antd/icon";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(problemsetsRoutes),
    RouterModule,
    LayoutModule,
    NzTableModule,
    HttpClientModule,
    ModuleModule,
    NzPageHeaderModule,
    MonacoEditorModule.forRoot(),
    FormsModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzDescriptionsModule,
    NzDividerModule,
    MarkdownModule.forRoot(),
    PipeModule,
    NzModalModule,
    NzIconModule
  ],
  declarations: [
    ProblemListComponent,
    ProblemSubmitComponent,
    ProblemHistoryComponent,
    ProblemDetailComponent,
    ProblemListTableComponent,
    ProblemHistoryTableComponent,
    ProblemSubmitMainComponent,
    ProblemDetailMainComponent,
  ],
  providers: [
    ProblemListService,
    ProblemHistoryService,
    ProblemHistoryPreviewService,
    ProblemDetailService
  ],
})
export class ProblemsetsModule {
}
