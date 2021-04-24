import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {TestDetail} from '../models/test-detail.model';

@Injectable({providedIn: 'root'})
export class TestDetailService {

  getTestDetail(id: number): Observable<TestDetail> {
    console.log('getTestDetail');
    return of(this.getMockTestDetail());
  }

  getMockTestDetail(): TestDetail {
    return {
      description: 'Test Description. For your first assignment, I prepared these items for you to ponder. If you are about to answer this activity, I assume that you’re already done reading the material I uploaded under Modules 1 and 2. How was it going so far? Another piece of a cake, right? Please answer the following, briefly and straightforward. This assignment should be done individually.',
      dueDate: 'Friday, 12 March 2021, 11:59 PM',
      timeRemaining: 'Assignment was submitted 12 hours 57 mins early',
      submissionStatus: 'Submitted for grading',
      submissionDate: 'Friday, 12 March 2021, 11:01 AM',
      gradingStatus: 'Graded',
      grade: '99.23 / 100.00',
      gradedDate: 'Saturday, 27 March 2021, 3:23 PM',
      gradedBy: 'Instructor',
    };
  }

}
