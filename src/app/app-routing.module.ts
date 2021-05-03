import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestHistoryComponent} from './modules/test-history/test-history.component';
import {TestViewComponent} from './modules/test-view/test-view.component';
import {TestInfoComponent} from './modules/test-info/test-info.component';
import {TestResultComponent} from './modules/test-result/test-result.component';
import {SubmissionComponent} from './modules/submission/submission.component';
import {GradesComponent} from './modules/grades/grades.component';
import {TestScheduleComponent} from './modules/test-schedule/test-schedule.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'test-schedule', component: TestScheduleComponent },
  { path: 'test-history', component: TestHistoryComponent },
  { path: 'test-info', component: TestInfoComponent },
  { path: 'submission/:sid', component: SubmissionComponent },
  { path: 'submission/test/:tid', component: SubmissionComponent },
  { path: 'test', component: TestViewComponent },
  { path: 'test-result', component: TestResultComponent },
  { path: 'grades', component: GradesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
