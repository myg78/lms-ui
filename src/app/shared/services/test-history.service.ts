import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {TestHistory} from '../models/test-history.model';

@Injectable({providedIn: 'root'})
export class TestHistoryService {

  getTestHistory(): Observable<TestHistory[]> {
    console.log('getTest');
    return of([this.getMockTestHistory(), this.getMockTestHistory()]);
  }

  getMockTestHistory(): TestHistory {
    return {
      attemptNo: '1',
      title: 'Exam 1',
      type: 'Exam',
      dueDate: 'Friday, 12 March 2021, 11:59 PM',
      submissionDate: 'Friday, 12 March 2021, 11:59 PM'
    };
  }

}
