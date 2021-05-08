import {Component, OnInit} from '@angular/core';
import {TestHistoryService} from '../../shared/services/test-history.service';
import {Observable} from 'rxjs';
import {Submission} from '../../shared/models/submission.model';
import {SubmissionService} from '../../shared/services/submission.service';
import {UserService} from '../../shared/services/user.service';
import {shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-test-history',
  templateUrl: './test-history.component.html',
  styleUrls: ['./test-history.component.css']
})
export class TestHistoryComponent implements OnInit {

  submissions: Observable<Submission[]>;
  dateFormat = 'EEEE, d MMMM y, h:mm a zzzz';
  showControls = false;

  constructor(
    private testHistoryService: TestHistoryService,
    private submissionService: SubmissionService,
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    console.log('init history'); // TODO remove
    this.getTestHistory();
  }

  getTestHistory(): void {
    const uid = this.userService.getLoginUser();
    this.submissions = this.testHistoryService.getTestHistory(uid).pipe(shareReplay());
  }

  deleteSubmission(sid): void {
    console.log('delete: ' + sid);
    this.submissionService.deleteSubmission(sid).subscribe(response => {
      this.getTestHistory();
    });
  }

  toggleControl() {
    const current = this.showControls;
    this.showControls = !current;
  }

}
