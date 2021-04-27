import {TestDetail2} from './test-detail2.model';

export interface TestHistory {
   // attemptNo: string;
   // title: string;
   // type: string;
   // dueDate: string;
   // submissionDate: string;
  id: number;
  student: number;
  test: TestDetail2;
  attempt_number: string;
  // title: string;
  // type: string;
  // dueDate: string;
  submission_date: string;
}
