import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {TestDetailBasic} from '../models/test-detail-basic.model';

@Injectable({providedIn: 'root'})
export class TestService {

  private baseUrl = 'http://localhost:8000/api/submissions';
  private url2 = 'http://localhost:8000/api/tests/';

  constructor(private http: HttpClient) {
  }

  getTest(tid: number): Observable<TestDetailBasic> {
    console.log('getTest');
    return this.http.get<any>(this.url2 + tid);
  }

  getTestContent(sid: number): Observable<any> {
    console.log('getTestContent');
    const url = `${this.baseUrl}/${sid}/content`;
    return this.http.get<any>(url);
  }

  submitTest(sid: number): Observable<any> {
    console.log('submitTestContent');
    const url = `${this.baseUrl}/${sid}/submit`;
    const form = new FormData();
    return this.http.put(url, form);
  }

}
