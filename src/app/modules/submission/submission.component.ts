import {Component, OnInit} from '@angular/core';
import {Submission} from '../../shared/models/submission.model';
import {SubmissionService} from '../../shared/services/submission.service';
import {ActivatedRoute} from '@angular/router';

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
    private testDetailService: SubmissionService,
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id: ' + id);
    this.getTestDetail(id);
  }

  getTestDetail(id: number): void {
    this.testDetailService.getTestDetail(id)
      .subscribe(testDetail => this.testDetail = testDetail);
  }
}
