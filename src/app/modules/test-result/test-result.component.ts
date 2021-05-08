import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SubmissionService} from '../../shared/services/submission.service';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.css']
})
export class TestResultComponent implements OnInit {

  grade_value: number;
  grade_max_value: number;

  constructor(
    private route: ActivatedRoute,
    private submissionService: SubmissionService) {
  }

  ngOnInit() {
    const sid = +this.route.snapshot.paramMap.get('sid'); // submission id
    this.submissionService.getSubmission(sid).subscribe(response => {
      this.grade_value = response['grade_value'];
      this.grade_max_value = response['grade_max_value'];
    });
  }
}
