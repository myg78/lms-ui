import {Component, OnInit} from '@angular/core';
import {TestHistory} from '../../shared/models/test-history.model';
import {TestHistoryService} from '../../shared/services/test-history.service';

@Component({
  selector: 'app-test-history',
  templateUrl: './test-history.component.html',
  styleUrls: ['./test-history.component.css']
})
export class TestHistoryComponent implements OnInit{

  history: TestHistory[];

  constructor(
    private testHistoryService: TestHistoryService,
  ) {}

  ngOnInit(): void {
    this.getTestHistory();
  }

  getTestHistory(): void {
    this.testHistoryService.getTestHistory()
      .subscribe(history => this.history = history);
  }

}
