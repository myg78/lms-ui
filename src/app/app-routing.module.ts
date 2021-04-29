import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestHistoryComponent} from './modules/test-history/test-history.component';
import {TestViewComponent} from './modules/test-view/test-view.component';
import {TestInfoComponent} from './modules/test-info/test-info.component';
import {TestResultComponent} from './modules/test-result/test-result.component';
import {TestDetailComponent} from './modules/test-detail/test-detail.component';
import {GradesComponent} from './modules/grades/grades.component';

const routes: Routes = [
  { path: 'test-history', component: TestHistoryComponent },
  { path: 'test-info', component: TestInfoComponent },
  { path: 'test-detail/:id', component: TestDetailComponent },
  { path: 'test', component: TestViewComponent },
  { path: 'test-result', component: TestResultComponent },
  { path: 'grades', component: GradesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
