import {TestDetailBasic} from './test-detail-basic.model';

export interface Submission {
  id: number;
  test: TestDetailBasic;
  attempt_number: number;
  submission_status: string;
  start_date: string;
  submission_date: string;
  grading_status: string;
  graded_date: string;
  graded_by: string;
  grade_value: number;
  grade_max_value: number;
}
