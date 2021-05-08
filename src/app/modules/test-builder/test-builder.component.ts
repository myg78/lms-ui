import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TestService} from '../../shared/services/test.service';

@Component({
  selector: 'app-test-builder',
  templateUrl: './test-builder.component.html',
  styleUrls: ['./test-builder.component.css']
})
export class TestBuilderComponent implements OnInit {

  dateFormat = 'EEEE, d MMMM y, h:mm a zzzz';
  jsonSample = '[{"type":"multiple-choice","label":"Which color of light has the longest wavelength?","answer":"red","number":1,"options":[{"id":"red","label":"Red"},{"id":"orange","label":"Orange"},{"id":"yellow","label":"Yellow"}]},{"type":"multiple-choice","label":"Which color of light has the shortest wavelength?","answer":"violet","number":2,"options":[{"id":"blue","label":"Blue"},{"id":"indigo","label":"Indigo"},{"id":"violet","label":"Violet"}]}]';

  testForm: FormGroup;

  constructor(
    private testService: TestService
  ) {
  }

  ngOnInit(): void {
    console.log('init test builder');

    this.testForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      type: new FormControl(''),
      timeLimitInSeconds: new FormControl(''),
      startDate: new FormControl(''),
      dueDate: new FormControl(''),
      content: new FormControl(''),
    });
  }

  onSubmit() {
    console.log('submit: ' + JSON.stringify(this.testForm.value));
    console.log('submit: ' + JSON.stringify(this.testForm.getRawValue()));
    this.testService.createTest(this.testForm).subscribe(response => {
      console.log('test saved: ' + response);
    });
  }

}
