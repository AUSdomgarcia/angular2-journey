import { Component } from '@angular/core';
import { Question } from './question.model';
import { QuizService } from './quiz.service';

@Component({
  selector: 'quiz-app',
  template: `
    <question *ngFor="let question of questions"
      [question]="question" (answer)="onAnswer(question.id, $event)"
      [correct]="isCorrect(question.id)"></question>
    <p *ngIf="!checked">
      <button (click)="check()">Check</button>
    </p>
    <p *ngIf="checked">
      Score: {{correctAnswers.size}} / {{questions.length}}
      ({{ correctAnswers.size / questions.length | percent }})
    </p>
  `,
})
export class AppComponent {

  questions: Question[];
  correctAnswers: Set<string>;

  private answers = new Map<string, string>();

  constructor(private quizService: QuizService) {
    this.questions = this.quizService.questions;
  }

  onAnswer(questionId: string, answerId: string) {
    this.answers.set(questionId, answerId);
  }

  isCorrect(questionId): boolean {
    if (this.correctAnswers) {
      return this.correctAnswers.has(questionId);
    }
  }

  check() {
    this.correctAnswers = this.quizService.check(this.answers);
  }

  get checked() {
    return this.correctAnswers !== undefined;
  }

}
