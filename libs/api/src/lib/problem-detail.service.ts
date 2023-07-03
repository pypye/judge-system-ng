import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "./config";

@Injectable({
  providedIn: 'root'
})
export class ProblemDetailService {

  constructor(private http: HttpClient) {
  }

  getProblemDetail(problem_code: string) {
    return this.http.get(`${BASE_URL}/problem`, {
      params: {
        problem_code: problem_code
      },
      withCredentials: true
    });
  }
}
