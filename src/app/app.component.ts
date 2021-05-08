import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lms-ui';

  ngOnInit(): void {
    console.log('app init');
    this.setLoginStudent();
  }

  setLoginStudent() { // do this since no login form
    const student = localStorage.getItem('student');
    if (student === null) {
      localStorage.setItem('student', '1'); // dummy default student id
    }
    console.log('student: ' + localStorage.getItem('student'));
  }

}
