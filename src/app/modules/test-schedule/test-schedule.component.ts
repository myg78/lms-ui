import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TestScheduleService} from '../../shared/services/test-schedule.service';
import {TestDetailBasic} from '../../shared/models/test-detail-basic.model';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-test-schedule',
  templateUrl: './test-schedule.component.html',
  styleUrls: ['./test-schedule.component.css']
})
export class TestScheduleComponent implements OnInit {

  tests$: Observable<TestDetailBasic[]>;
  dateFormat = 'EEEE, d MMMM y, h:mm a zzzz';
  simpleDateFormat = 'd MMMM y, h:mm a zzzz';

  constructor(
    private testScheduleService: TestScheduleService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.getTestSchedule();
  }

  getTestSchedule(): void {
    const uid = this.userService.getLoginUser();
    this.tests$ = this.testScheduleService.getTestSchedule(uid);
  }

}
