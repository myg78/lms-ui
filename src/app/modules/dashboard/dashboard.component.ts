import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TestScheduleService} from '../../shared/services/test-schedule.service';
import {TestDetailBasic} from '../../shared/models/test-detail-basic.model';
import {TestHistoryService} from '../../shared/services/test-history.service';
import {Submission} from '../../shared/models/submission.model';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tests$: Observable<TestDetailBasic[]>;
  history$: Observable<Submission[]>;

  dateFormat = 'EEEE, d MMMM y, h:mm a zzzz';
  simpleDateFormat = 'd MMMM y, h:mm a zzzz';
  student: number;

  constructor(
    private testScheduleService: TestScheduleService,
    private testHistoryService: TestHistoryService,
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.student = this.userService.getLoginUser();
    this.getTestSchedule();
    this.getTestHistory();
  }

  getTestSchedule(): void {
    this.tests$ = this.testScheduleService.getTestSchedule();
  }

  getTestHistory(): void {
    this.history$ = this.testHistoryService.getTestHistory(this.student);
  }

}
