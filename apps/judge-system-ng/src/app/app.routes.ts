import {Route} from '@angular/router';
import {CanActivateAuthGuardService} from "@judge-system-ng/guards";
import {CanActivateAppGuardService} from "@judge-system-ng/guards";
import {Page404Component} from "../../../../libs/layout/src/lib/page-404/page-404.component";

export const appRoutes: Route[] = [
  {
    path: 'login',
    canActivate: [CanActivateAuthGuardService],
    loadChildren: () => import('@judge-system-ng/login').then(m => m.LoginModule),

  },
  {
    path: '',
    canActivate: [CanActivateAppGuardService],
    loadChildren: () => import('@judge-system-ng/home').then(m => m.HomeModule),

  },
  {
    path: 'problemsets',
    canActivate: [CanActivateAppGuardService],
    loadChildren: () => import('@judge-system-ng/problemsets').then(m => m.ProblemsetsModule),
  },
  {
    path: "**",
    component: Page404Component
  }
];
