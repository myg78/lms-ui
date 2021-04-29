import {Component, OnInit} from '@angular/core';
import {TestDetail} from '../../shared/models/test-detail.model';
import {TestDetailService} from '../../shared/services/test-detail.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {

  testDetail: TestDetail;
  dateFormat = 'EEEE, d MMMM y, h:mm a zzzz';

  constructor(
    private route: ActivatedRoute,
    private testDetailService: TestDetailService,
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
