import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {TestDetailBasic} from '../models/test-detail-basic.model';

@Injectable({providedIn: 'root'})
export class TestScheduleService {

  private url = 'http://localhost:8000/api/tests';

  constructor(private http: HttpClient) {}

  getTestSchedule(uid: number): Observable<TestDetailBasic[]> {
    console.log('getTestSchedule');
    return this.http.get<any>(this.url);
  }

}
