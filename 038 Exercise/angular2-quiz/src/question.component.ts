import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'question',
  template: `
    <p>
      <strong>{{question.text}}</strong>
    </p>
    <div class="indent">
      <div *ngFor="let option of question.options">
        <label>
          <input type="radio" [name]="question.id" [value]="option.id"
            (click)="answer.emit($event.target.value)" [disabled]="checked">
          {{option.text}}
        </label>
      </div>
      <p *ngIf="correct === true">✔ Correct</p>
      <p *ngIf="correct === false">✘ Incorrect</p>
    </div>
  `,
  styles: [`
    .indent {
      margin-left: 3ex;
    }
  `]
})
export class QuestionComponent {

  @Input() question: Question;
  @Input() correct: boolean;
  @Output() answer = new EventEmitter<string>();

  get checked() {
    return this.correct !== undefined;
  }

}
