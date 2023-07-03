import {Injectable} from '@angular/core';
import {AuthService} from "@judge-system-ng/api";
import {defer, of, switchMap} from "rxjs";
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CanActivateAppGuardService implements CanActivate, CanActivateChild {

  constructor(private authApi: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authApi.isLoggedIn$.pipe(
      switchMap((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          return of(true);
        }
        return defer(() => this.router.navigate(['/login']).then(() => false))
      })
    );
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }
}
