import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';

@Injectable({providedIn: 'root'})
export class UserService {

  users = {
    1: {id: 1, firstName: 'Peter', lastName: 'Parker', role: 'student'},
    2: {id: 2, firstName: 'Tony', lastName: 'Stark', role: 'student'},
    3: {id: 3, firstName: 'Clark', lastName: 'Kent', role: 'student'},
    4: {id: 4, firstName: 'Bruce', lastName: 'Wayne', role: 'student'},
    5: {id: 5, firstName: 'Natasha', lastName: 'Romanoff', role: 'student'},
    6: {id: 6, firstName: 'Diana', lastName: 'Prince', role: 'student'},
    7: {id: 7, firstName: 'Steve', lastName: 'Rogers', role: 'student'},
    8: {id: 8, firstName: 'Jean', lastName: 'Grey', role: 'student'},
    9: {id: 9, firstName: 'James', lastName: 'Howlett', role: 'student'},
    99: {id: 99, firstName: 'Professor Charles', lastName: 'Xavier', role: 'instructor'},
  };

  constructor(private http: HttpClient) {
  }

  getUsers(): User[] {
    const list = [];
    for (const id in this.users) {
      list.push(this.users[id]);
    }
    return list;
  }

  getUser(uid: number): User {
    return this.users[uid];
  }

  getLoginUser(): number {
    return +localStorage.getItem('student');
  }

}
