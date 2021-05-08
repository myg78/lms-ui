import {Component, OnInit} from '@angular/core';
import {shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Submission} from '../../shared/models/submission.model';
import {TestHistoryService} from '../../shared/services/test-history.service';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  submissions: Observable<Submission[]>;

  constructor(
    private testHistoryService: TestHistoryService,
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.getTestHistory();
  }

  getTestHistory(): void {
    const uid = this.userService.getLoginUser();
    this.submissions = this.testHistoryService.getTestHistory(uid).pipe(shareReplay());
  }

}

