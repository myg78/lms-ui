import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  users: User[];
  user: User;

  constructor(
    private router: Router,
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    const uid = localStorage.getItem('student');
    this.user = this.userService.getUser(+uid);
  }

  switchUser(uid: string) {
    localStorage.setItem('student', uid);
    this.user = this.userService.getUser(+uid);
    this.redirectTo('/dashboard');
  }

  redirectTo(uri: string) { // workaround for user switch/redirect
    this.router.navigateByUrl('/test-schedule', {skipLocationChange: true}).then(() =>
      this.router.navigate([uri]));
  }

}
