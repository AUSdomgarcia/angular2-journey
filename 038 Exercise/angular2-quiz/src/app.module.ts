import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QuizService } from './quiz.service';
import { QuestionComponent } from './question.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, QuestionComponent],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
