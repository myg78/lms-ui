import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TestService} from '../../shared/services/test.service';
import {MatSnackBar} from '@angular/material';

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
    private testService: TestService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    console.log('init test builder');
    this.testForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      timeLimitInSeconds: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      dueDate: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log('valid: ' + this.testForm.valid);
    if (this.testForm.valid) {
      console.log('submit: ' + JSON.stringify(this.testForm.value));
      this.testService.createTest(this.testForm).subscribe(response => {
        console.log('test saved: ' + response);
        this.openSnackBar('Test saved successfully', 'OK');
      });
    } else {
      this.openSnackBar('All form fields are required', 'ERROR');
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
