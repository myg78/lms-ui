import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './modules/header/header.component';
import {SidebarComponent} from './modules/sidebar/sidebar.component';
import {ContentComponent} from './modules/content/content.component';
import {TestHistoryComponent} from './modules/test-history/test-history.component';
import {TestViewComponent} from './modules/test-view/test-view.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatButtonModule, MatDatepickerModule, MatExpansionModule,
  MatIconModule,
  MatInputModule, MatMenuModule, MatNativeDateModule,
  MatRadioModule,
  MatSnackBarModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TestInfoComponent} from './modules/test-info/test-info.component';
import {TestResultComponent} from './modules/test-result/test-result.component';
import {CountdownModule} from 'ngx-countdown';
import {SubmissionComponent} from './modules/submission/submission.component';
import {GradesComponent} from './modules/grades/grades.component';
import {HttpClientModule} from '@angular/common/http';
import {TestScheduleComponent} from './modules/test-schedule/test-schedule.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {TestBuilderComponent} from './modules/test-builder/test-builder.component';
import {PrettyjsonPipe} from './shared/pipes/pretty-json-pipe';
import {AdminComponent} from './modules/admin/admin.component';
import {NotificationComponent} from './modules/notification/notification.component';
import {BlankComponent} from './modules/blank/blank.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    TestScheduleComponent,
    TestHistoryComponent,
    TestInfoComponent,
    SubmissionComponent,
    TestViewComponent,
    TestResultComponent,
    GradesComponent,
    DashboardComponent,
    TestBuilderComponent,
    AdminComponent,
    NotificationComponent,
    BlankComponent,
    PrettyjsonPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatSnackBarModule,
    MatTableModule,
    CountdownModule,
    HttpClientModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
