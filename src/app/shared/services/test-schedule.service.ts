import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {TestDetailBasic} from '../models/test-detail-basic.model';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class TestScheduleService {

  private url = `${environment.apiUrl}/api/tests`;

  constructor(private http: HttpClient) {}

  getTestSchedule(): Observable<TestDetailBasic[]> {
    console.log('getTestSchedule');
    return this.http.get<any>(this.url);
  }

}
