import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "./config";

@Injectable({
  providedIn: 'root'
})
export class ProblemHistoryPreviewService {

  constructor(private http: HttpClient) {
  }

  getCode(id: string) {
    return this.http.get(`${BASE_URL}/submissions/show/${id}`, {
      withCredentials: true,
      responseType: 'text'
    });
  }

  getLog(id: string) {
    return this.http.get(`${BASE_URL}/submissions/log/${id}`, {withCredentials: true});
  }
}
