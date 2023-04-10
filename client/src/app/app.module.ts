import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PapersComponent } from './papers/papers.component';
import { PaperDetailComponent } from './papers/paper-detail/paper-detail.component';
import { QuestionListComponent } from './papers/question-list/question-list.component';
import { QuestionComponent } from './papers/question-list/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PapersComponent,
    PaperDetailComponent,
    QuestionListComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
