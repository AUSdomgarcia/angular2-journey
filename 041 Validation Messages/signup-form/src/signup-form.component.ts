import { Component } from '@angular/core';

@Component({
  selector: 'signup-form',
  template: `
    <form (submit)="onSubmit()" novalidate>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" #emailField="ngModel"
          [(ngModel)]="email" name="email" required pattern=".+@.+">
        <p *ngIf="emailField.touched && emailField.invalid"
          class="alert alert-danger">Please enter a valid email</p>
      </div>
      <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
  `,
  styles: [`
    input.ng-dirty.ng-invalid { border: solid red 2px; }
    input.ng-dirty.ng-valid { border: solid green 2px; }
  `]
})
export class SignupFormComponent {

  email = '';

  onSubmit() {
    console.log('should submit:', this.email);
  }
}
