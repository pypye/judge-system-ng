import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "./config";

@Injectable({
  providedIn: 'root'
})
export class ProblemListService {

  constructor(private http: HttpClient) {
  }

  getProblemList() {
    return this.http.get(`${BASE_URL}/problems`, {withCredentials: true});
  }
}
