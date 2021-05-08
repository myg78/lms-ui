import {Question} from './question.model';

export interface Test {
  title: string;
  description: string;
  type: string;
  time_limit_in_seconds: number;
  start_date: string;
  due_date: string;
  content: Question[];
}
