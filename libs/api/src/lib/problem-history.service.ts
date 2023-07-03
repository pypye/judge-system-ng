import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "./config";

@Injectable({
  providedIn: 'root'
})
export class ProblemHistoryService {

  constructor(private http: HttpClient) {
  }

  getHistory(){
    return this.http.get(`${BASE_URL}/submissions/all`, {withCredentials: true});
  }

}
