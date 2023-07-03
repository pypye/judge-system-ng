import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "./config";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  doLogin(data: any) {
    return this.http.post(`${BASE_URL}/login`, data, {withCredentials: true});
  }
}
