import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {TestHistory} from '../models/test-history.model';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class TestHistoryService {

  private url = 'http://localhost:8000/api/students/1/tests';

  constructor(private http: HttpClient) {}

  getTestHistory(): Observable<TestHistory[]> {
    console.log('getTest');
    return this.http.get<any>(this.url);
    // return of([this.getMockTestHistory(), this.getMockTestHistory()]);
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
