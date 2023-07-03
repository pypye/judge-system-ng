import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NzUploadFile} from "ng-zorro-antd/upload";
import {BASE_URL} from "./config";

@Injectable({
  providedIn: 'root'
})
export class QuickSubmitService {

  constructor(private http: HttpClient) {
  }

  submit(file: any) {
    const formData = new FormData();
    const problemCode = file.name.split('.')[0];
    formData.append('file', file);
    return this.http.post(`${BASE_URL}/submit/quick/${problemCode}`, formData, {withCredentials: true});
  }
}
