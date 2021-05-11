import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TestScheduleService} from '../../shared/services/test-schedule.service';
import {TestDetailBasic} from '../../shared/models/test-detail-basic.model';
import {TestHistoryService} from '../../shared/services/test-history.service';
import {Submission} from '../../shared/models/submission.model';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(
  ) {
  }


}
