import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Submission} from '../models/submission.model';

@Injectable({providedIn: 'root'})
export class TestHistoryService {

  private baseUrl = 'http://localhost:8000/api/students';

  constructor(private http: HttpClient) {}

  getTestHistory(uid: number): Observable<Submission[]> {
    console.log('getTestHistory');
    const url = `${this.baseUrl}/${uid}/tests`;
    return this.http.get<any>(url);
  }

  getSubmissionForTest(uid: number, tid: number): Observable<Submission> {
    console.log('getTestHistory');
    const url = `${this.baseUrl}/${uid}/tests/${tid}`;
    return this.http.get<any>(url);
  }

  // getMockTestHistory(): TestHistory {
  //   return {
  //     attemptNo: '1',
  //     title: 'Exam 1',
  //     type: 'Exam',
  //     dueDate: 'Friday, 12 March 2021, 11:59 PM',
  //     submissionDate: 'Friday, 12 March 2021, 11:59 PM'
  //   };
  // }

}
