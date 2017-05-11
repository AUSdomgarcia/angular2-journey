import { Component } from '@angular/core';

@Component({
  selector: 'signup-form',
  template: `
    <form (submit)="onSubmit()">
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control"
          [(ngModel)]="email" name="email" required>
      </div>
      <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
  `
})
export class SignupFormComponent {

  email = '';

  onSubmit() {
    console.log('should submit:', this.email);
  }
}
