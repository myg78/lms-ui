import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TestService} from '../../shared/services/test.service';
import {Test} from '../../shared/models/test.model';
import {MatSnackBar, MatStepper} from '@angular/material';
import {Router} from '@angular/router';

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
    private formBuilder: FormBuilder,
    private testService: TestService,
    private router: Router,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    console.log('init test');

    this.selectionsFormGroup = this.formBuilder.group({
      categories: this.formBuilder.array([])
    });

    this.testService.getSubmission(1).subscribe(submission => {
      submission.test.content.forEach((question, i) => {
        console.log('question: ' + question.label);
        this.categories.push(this.createCategorySelection(question.number.toString(), question.label, question.options, i));
        this.test = submission.test;
      });
      console.log('test: ' + this.test.title);
    });
    console.log('init end');
  }

  ngAfterViewInit() {
    this.stepper._getIndicatorType = () => 'number';
  }

  get categories(): FormArray {
    return this.selectionsFormGroup.get('categories') as FormArray;
  }

  createCategorySelection(questionNumber: string, title: string, items, id: number): FormGroup {
    console.log('tag: ' + questionNumber);
    console.log('title: ' + title);
    console.log('items: ' + items);
    console.log('id: ' + id);
    const categorySelection = this.formBuilder.group({
      // tag: [tag],
      // title: [title],
      // id: [id],
      // selectedValue: [undefined, Validators.required],
      // options: this._formBuilder.array([])
      id: [questionNumber],
      label: [title],
      selectedValue: [undefined, Validators.required],
      options: this.formBuilder.array([])
    });
    const opts = categorySelection.get('options') as FormArray;
    items.forEach((item, i) => {
      opts.push(this.formBuilder.group({
        // id: [i],
        // tag: [item.tag],
        // name: [item.name],
        // items: [item.items],
        id: [item.id],
        label: [item.label],
      }));
      // if (item.selected) {
      //   categorySelection.patchValue({selectedValue: item});
      // }
    });
    return categorySelection;
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
    const form = JSON.stringify(this.selectionsFormGroup.getRawValue());
    console.log('submit: ' + form);
    this.router.navigate(['/test-result', {id: 'test'}]);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
