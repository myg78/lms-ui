import {Component, OnInit} from '@angular/core';
import {TestHistoryService} from '../../shared/services/test-history.service';
import {Observable} from 'rxjs';
import {Submission} from '../../shared/models/submission.model';
import {SubmissionService} from '../../shared/services/submission.service';

@Component({
  selector: 'app-test-history',
  templateUrl: './test-history.component.html',
  styleUrls: ['./test-history.component.css']
})
export class TestHistoryComponent implements OnInit {

  submissions: Observable<Submission[]>;
  dateFormat = 'EEEE, d MMMM y, h:mm a zzzz';

  constructor(
    private testHistoryService: TestHistoryService,
    private submissionService: SubmissionService,
  ) {
  }

  ngOnInit(): void {
    this.getTestHistory();
  }

  getTestHistory(): void {
    this.submissions = this.testHistoryService.getTestHistory(1); // TODO param
  }

  deleteSubmission(sid): void {
    console.log('delete: ' + sid);
    this.submissionService.deleteSubmission(sid).subscribe(response => {
      this.getTestHistory();
    });
  }

}
