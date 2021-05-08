import {Option} from './option.model';

export interface Question {
   number: number;
   label: string;
   type: string;
   options: Option[];
}
