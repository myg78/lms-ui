import {Component, OnInit} from '@angular/core';
import {TestHistory} from '../../shared/models/test-history.model';
import {TestHistoryService} from '../../shared/services/test-history.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-test-history',
  templateUrl: './test-history.component.html',
  styleUrls: ['./test-history.component.css']
})
export class TestHistoryComponent implements OnInit {

  history$: Observable<TestHistory[]>;

  constructor(
    private testHistoryService: TestHistoryService,
  ) {}

  ngOnInit(): void {
    this.getTestHistory();
  }

  getTestHistory(): void {
    this.history$ = this.testHistoryService.getTestHistory();
  }

}
