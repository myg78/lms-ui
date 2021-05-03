import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {TestDetail2} from '../models/test-detail2.model';

@Injectable({providedIn: 'root'})
export class TestService {

  // constructor(private messageService: MessageService) {
  // }

  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   this.messageService.add('HeroService: fetched heroes');
  //   return heroes;
  // }

  // getHero(id: number): Observable<Hero> {
  //   // For now, assume that a hero with the specified `id` always exists.
  //   // Error handling will be added in the next step of the tutorial.
  //   const hero = HEROES.find(h => h.id === id) as Hero;
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(hero);
  // }

  private url = 'http://localhost:8000/api/submissions/1';
  private url2 = 'http://localhost:8000/api/tests/';

  constructor(private http: HttpClient) {
  }

  getSubmission(id: number): Observable<any> {
    console.log('getSubmission');
    return this.http.get<any>(this.url);
  }

  getTest(tid: number): Observable<TestDetail2> {
    console.log('getTest');
    return this.http.get<any>(this.url2 + tid);
  }

  // getTest0(id: number): Observable<string[]> {
  //   console.log('getTest');
  //   const list = ['Hello', 'There'];
  //   return of(list);
  // }
  //
  // getTest1(id: number): Observable<Test> {
  //   console.log('getTest');
  //   return of(this.getMockTest());
  // }
  //
  // getMockTest(): Test {
  //   return {
  //     title: 'Sample Quiz: Random stuff',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  //     type: 'quiz',
  //     due_date: '',
  //     start_date: '',
  //     time_limit_in_seconds: 90,
  //     content: [this.getMockQuestion1(), this.getMockQuestion2(), this.getMockQuestion3()]
  //   };
  // }
  //
  // getMockQuestion1(): Question {
  //   return {
  //     number: 1,
  //     label: 'What is your favorite season?',
  //     type: 'multiple-choice',
  //     options: [
  //       {id: 'winter', label: 'Winter'},
  //       {id: 'spring', label: 'Spring'},
  //       {id: 'summer', label: 'Summer'},
  //       {id: 'fall', label: 'Fall'}
  //     ]
  //   };
  // }
  //
  // getMockQuestion2(): Question {
  //   return {
  //     number: 2,
  //     label: 'What is your favorite weather?',
  //     type: 'multiple-choice',
  //     options: [
  //       {id: 'sunny', label: 'Sunny'},
  //       {id: 'windy', label: 'Windy'},
  //       {id: 'cloudy', label: 'Cloudy'},
  //       {id: 'rainy', label: 'Rainy'}
  //     ]
  //   };
  // }
  //
  // getMockQuestion3(): Question {
  //   return {
  //     number: 2,
  //     label: 'Who is your favorite hero?',
  //     type: 'multiple-choice',
  //     options: [
  //       {id: 'miya', label: 'Miya'},
  //       {id: 'layla', label: 'Layla'},
  //       {id: 'diggie', label: 'Diggie'},
  //       {id: 'nana', label: 'Nana'}
  //     ]
  //   };
  // }

}
