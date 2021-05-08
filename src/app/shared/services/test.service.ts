import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {TestDetailBasic} from '../models/test-detail-basic.model';
import {FormGroup} from '@angular/forms';

@Injectable({providedIn: 'root'})
export class TestService {

  private baseUrl = 'http://localhost:8000/api/submissions';
  private testBaseUrl = 'http://localhost:8000/api/tests';

  constructor(private http: HttpClient) {
  }

  getTest(tid: number): Observable<TestDetailBasic> {
    console.log('getTest');
    const url = `${this.testBaseUrl}/${tid}`;
    return this.http.get<any>(url);
  }

  getTestContent(sid: number): Observable<any> {
    console.log('getTestContent');
    const url = `${this.baseUrl}/${sid}/content`;
    return this.http.get<any>(url);
  }

  submitTest(sid: number, formValue: string): Observable<any> {
    console.log('submitTest');
    const url = `${this.baseUrl}/${sid}/submit`;
    const form = new FormData();
    form.append('form_value', formValue);
    return this.http.post(url, form);
  }

  createTest(formGroup: FormGroup): Observable<any> {
    console.log('createTest');
    console.log(formGroup.get('title').value);
    console.log(formGroup.get('description').value);
    console.log(new Date(formGroup.get('startDate').value).toISOString());
    console.log(new Date(formGroup.get('dueDate').value).toISOString());
    console.log(JSON.stringify(formGroup.get('content').value));
    const form = new FormData();
    form.append('title', formGroup.get('title').value);
    form.append('description', formGroup.get('description').value);
    form.append('type', formGroup.get('type').value);
    form.append('time_limit_in_seconds', formGroup.get('timeLimitInSeconds').value);
    form.append('start_date', new Date(formGroup.get('startDate').value).toISOString());
    form.append('due_date', new Date(formGroup.get('dueDate').value).toISOString());
    form.append('test_content', JSON.stringify(formGroup.get('content').value));
    return this.http.post(this.testBaseUrl, form);
  }

}
