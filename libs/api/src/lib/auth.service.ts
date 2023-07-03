import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "./config";
import {map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn$: Observable<any>;

  constructor(private http: HttpClient) {
    this.isLoggedIn$ = this.http.get(`${BASE_URL}/login`, {withCredentials: true}).pipe(
      tap((res: any) => {
        if (res.logged_in) {
          localStorage.setItem('user', JSON.stringify(res));
        } else {
          localStorage.removeItem('user');
        }
      }),
      map((res: any) => res.logged_in)
    );
  }


}
