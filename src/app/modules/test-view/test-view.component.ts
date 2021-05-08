import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TestService} from '../../shared/services/test.service';
import {Test} from '../../shared/models/test.model';
import {MatSnackBar, MatStepper} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.css']
})
export class TestViewComponent implements OnInit, AfterViewInit {

  isLinear = false;
  selectionsFormGroup: FormGroup;

  test: Test;
  submission: any;

  @ViewChild('stepper') stepper: MatStepper;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private testService: TestService,
    private router: Router,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    console.log('init test');
    const sid = +this.route.snapshot.paramMap.get('sid'); // submission id
    this.selectionsFormGroup = this.formBuilder.group({
      questions: this.formBuilder.array([])
    });

    this.testService.getTestContent(sid).subscribe(submission => {
      submission.test.content.forEach((question, i) => {
        console.log('question: ' + question.label);
        this.questions.push(this.createSelection(question.number.toString(), question.label, question.options, i));
      });
      this.test = submission.test;
      this.submission = submission;
      console.log('test: ' + this.test.title);
    });
    console.log('init end');
  }

  ngAfterViewInit() {
    this.stepper._getIndicatorType = () => 'number';
  }

  get questions(): FormArray {
    return this.selectionsFormGroup.get('questions') as FormArray;
  }

  createSelection(questionNumber: string, title: string, items, id: number): FormGroup {
    console.log('tag: ' + questionNumber);
    console.log('title: ' + title);
    console.log('items: ' + items);
    console.log('id: ' + id);
    const questionSelection = this.formBuilder.group({
      number: [questionNumber],
      label: [title],
      selectedValue: [undefined, Validators.required],
      options: this.formBuilder.array([])
    });
    const opts = questionSelection.get('options') as FormArray;
    items.forEach((item, i) => {
      opts.push(this.formBuilder.group({
        id: [item.id],
        label: [item.label],
      }));
    });
    return questionSelection;
  }

  move(index: number) {
    this.stepper.selectedIndex = index;
  }

  onStart($event) {
    console.log('start');
    // this.openSnackBar('Test has started', 'OK');
  }

  onNotify($event) {
    console.log('notify: ' + $event);
    const seconds = $event / 1000;
    this.openSnackBar('You have ' + seconds + ' seconds remaining', 'OK');
  }

  onFinish($event) {
    console.log('finish');
    this.onSubmit();
  }

  onSubmit() {
    const formValue = JSON.stringify(this.selectionsFormGroup.getRawValue());
    console.log('submit: ' + formValue);

    this.testService.submitTest(this.submission.id, formValue).subscribe(response => {
      console.log('submitted: ' + response['id']);
      this.router.navigate(['/test-result', {sid: response['id']}]);
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
