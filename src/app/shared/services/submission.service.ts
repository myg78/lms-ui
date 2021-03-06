import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {Submission} from '../models/submission.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class SubmissionService {

  private baseUrl = `${environment.apiUrl}/api/submissions`;

  constructor(private http: HttpClient) {
  }

  getSubmission(sid: number): Observable<Submission> {
    console.log('getSubmission');
    const url = `${this.baseUrl}/${sid}`;
    return this.http.get<any>(url);
  }

  startSubmission(uid: number, tid: number) {
    const form = new FormData();
    form.append('student_id', uid.toString());
    form.append('test_id', tid.toString());
    form.append('attempt_number', '1');
    return this.http.post(this.baseUrl, form);
  }

  deleteSubmission(sid: number) {
    const url = `${this.baseUrl}/${sid}`;
    return this.http.delete(url);
  }

}
