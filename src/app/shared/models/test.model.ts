import {Question} from './question.model';

export interface Test {
   title: string;
   description: string;
   dueDate: string;
   openDate: string;
   closeDate: string;
   durationInSeconds: number;
   questions: Question[];
}
