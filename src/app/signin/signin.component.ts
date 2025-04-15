
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService) { }

  signIn() {
    if (this.authService.signIn(this.username, this.password)) {
      this.message = 'Sign-in successful!';
    } else {
      this.message = 'Invalid username or password.';
    }
  }
}