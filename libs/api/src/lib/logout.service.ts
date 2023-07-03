import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "./config";

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient) {
  }

  doLogout() {
    return this.http.post(`${BASE_URL}/logout`, {}, {withCredentials: true});
  }
}
