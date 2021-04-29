import {TestDetail2} from './test-detail2.model';

export interface TestDetail {
  test: TestDetail2;
  // timeRemaining: string;
  attempt_number: number;
  submission_status: string;
  submission_date: string;
  grading_status: string;
  graded_date: string;
  graded_by: string;
  grade_value: number;
  grade_max_value: number;
}
