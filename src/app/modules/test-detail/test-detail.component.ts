import {Component, OnInit} from '@angular/core';
import {TestDetail} from '../../shared/models/test-detail.model';
import {TestHistoryService} from '../../shared/services/test-history.service';
import {TestDetailService} from '../../shared/services/test-detail.service';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {

  testDetail: TestDetail;

  constructor(
    private testDetailService: TestDetailService,
  ) {}

  ngOnInit(): void {
    this.getTestDetail(1);
  }

  getTestDetail(id: number): void {
    this.testDetailService.getTestDetail(id)
      .subscribe(testDetail => this.testDetail = testDetail);
  }
}
