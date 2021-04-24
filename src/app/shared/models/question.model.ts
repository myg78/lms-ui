import {Option} from './option.model';

export interface Question {
   id: number;
   number: number;
   label: string;
   type: string;
   options: Option[];
}
