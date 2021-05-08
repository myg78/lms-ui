import {Component, OnInit} from '@angular/core';
import {Submission} from '../../shared/models/submission.model';
import {SubmissionService} from '../../shared/services/submission.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TestService} from '../../shared/services/test.service';
import {forkJoin} from 'rxjs';
import {TestHistoryService} from '../../shared/services/test-history.service';
import {mergeMap} from 'rxjs/operators';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {

  submission: Submission;
  dateFormat = 'EEEE, d MMMM y, h:mm a zzzz';
  showStart = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private submissionService: SubmissionService,
    private testService: TestService,
    private testHistoryService: TestHistoryService,
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    const sid = +this.route.snapshot.paramMap.get('sid'); // submission id
    const tid = +this.route.snapshot.paramMap.get('tid'); // test id
    const uid = this.userService.getLoginUser(); // user id
    if (sid === 0) {
      this.getTest(uid, tid);
    } else {
      this.getSubmission(sid);
    }
  }

  getSubmission(sid: number): void {
    this.submissionService.getSubmission(sid)
      .subscribe(testDetail => this.submission = testDetail);
  }

  getTest(uid: number, tid: number): void {
    forkJoin(
      this.testService.getTest(tid), this.testHistoryService.getSubmissionForTest(uid, tid),
    ).subscribe((res) => {
      this.setTestInfo(res[0]);
      this.setSubmissionInfo(res[1]);
    });
  }

  setTestInfo(test) {
    this.submission = {
      id: 0,
      test: test,
      attempt_number: 0,
      submission_status: '',
      start_date: '',
      submission_date: '',
      grading_status: '',
      graded_date: '',
      graded_by: '',
      grade_value: 0,
      grade_max_value: 0,
    };
  }

  setSubmissionInfo(submission: Submission) {
    console.log('submission id: ' + submission.id);
    if (submission.id) {
      this.submissionService.getSubmission(submission.id).subscribe(response => {
        this.submission.id = response.id;
        this.submission.attempt_number = response.attempt_number;
        this.submission.submission_status = response.submission_status;
        this.submission.start_date = response.start_date;
        this.submission.submission_date = response.submission_date;
        this.submission.grading_status = response.grading_status;
        this.submission.graded_date = response.graded_date;
        this.submission.graded_by = response.graded_by;
        this.submission.grade_value = response.grade_value;
        this.submission.grade_max_value = response.grade_max_value;
      });
    } else {
      this.showStart = true;
    }
  }

  startTest() {
    console.log('start test');
    const uid = this.userService.getLoginUser();
    this.submissionService.startSubmission(uid, this.submission.test.id)
      .pipe(
        mergeMap((res1) => this.submissionService.getSubmission(res1['id'])),
      ).subscribe((res2) => {
      console.log('started submission: ' + res2['id']);
      this.router.navigate(['/test', {sid: res2['id']}]);
    });
  }

  continueTest() { // TODO finalize
    console.log('continue test: ' + this.submission.id);
    this.router.navigate(['/test', {sid: this.submission.id}]);
    // this.submissionService.getSubmission(this.submission.id).subscribe(response => {
    //   this.router.navigate(['/test', {sid: response['id']}]);
    // });
  }

}
