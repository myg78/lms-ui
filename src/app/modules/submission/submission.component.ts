import {Component, OnInit} from '@angular/core';
import {Submission} from '../../shared/models/submission.model';
import {SubmissionService} from '../../shared/services/submission.service';
import {ActivatedRoute} from '@angular/router';
import {TestService} from '../../shared/services/test.service';
import {forkJoin} from 'rxjs';
import {TestHistoryService} from '../../shared/services/test-history.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {

  testDetail: Submission;
  dateFormat = 'EEEE, d MMMM y, h:mm a zzzz';

  constructor(
    private route: ActivatedRoute,
    private submissionService: SubmissionService,
    private testService: TestService,
    private testHistoryService: TestHistoryService,
  ) {
  }

  ngOnInit(): void {
    const sid = +this.route.snapshot.paramMap.get('sid'); // submission id
    const tid = +this.route.snapshot.paramMap.get('tid'); // test id
    console.log('sid: ' + sid);
    console.log('tid: ' + tid);
    const uid = 1; // TODO param
    if (sid === 0) {
      this.getTest(uid, tid);
    } else {
      this.getSubmission(sid);
    }
  }

  getSubmission(sid: number): void {
    this.submissionService.getSubmission(sid)
      .subscribe(testDetail => this.testDetail = testDetail);
  }

  getTest(uid: number, tid: number): void {
    // this.testService.getTest(tid)
    //   .subscribe(test => {
    //     this.testDetail = {
    //       test: test,
    //       attempt_number: 0,
    //       submission_status: '',
    //       submission_date: '',
    //       grading_status: '',
    //       graded_date: '',
    //       graded_by: '',
    //       grade_value: 0,
    //       grade_max_value: 0,
    //     };
    //     return this.testDetail;
    //   });

    forkJoin(
      this.testService.getTest(tid), this.testHistoryService.getSubmissionForTest(uid, tid),
    ).subscribe((res) => {
      this.setTestInfo(res[0]);
      this.setSubmissionInfo(res[1]);
    });
  }

  setTestInfo(test) {
    this.testDetail = {
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
    console.log('sub: ' + submission.attempt_number);
    if (submission) {
      console.log('hello');
    }
    if (submission.id) {
      console.log('there');
      this.testDetail.attempt_number = submission.attempt_number;
      this.testDetail.submission_status = submission.submission_status;
      this.testDetail.start_date = submission.start_date;
      this.testDetail.submission_date = submission.submission_date;
      this.testDetail.grading_status = submission.grading_status;
      this.testDetail.graded_date = submission.graded_date;
      this.testDetail.graded_by = submission.graded_by;
      this.testDetail.grade_value = submission.grade_value;
      this.testDetail.grade_max_value = submission.grade_max_value;
    }
  }

}
