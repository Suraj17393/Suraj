
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService) { }

  signUp() {
    if (this.authService.signUp(this.username, this.password)) {
      this.message = 'Sign-up successful!';
    } else {
      this.message = 'Username already exists.';
    }
  }
}