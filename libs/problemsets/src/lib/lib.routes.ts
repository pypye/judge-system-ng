import {Route} from '@angular/router';
import {ProblemListComponent} from "./problem-list/problem-list.component";
import {ProblemSubmitComponent} from "./problem-submit/problem-submit.component";
import {ProblemHistoryComponent} from "./problem-history/problem-history.component";
import {ProblemDetailComponent} from "./problem-detail/problem-detail.component";

export const problemsetsRoutes: Route[] = [
  {path: '', component: ProblemListComponent},
  {path: 'view/:id', component: ProblemDetailComponent},
  {path: 'submit', component: ProblemSubmitComponent},
  {path: 'history', component: ProblemHistoryComponent},

];
