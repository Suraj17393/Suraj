
import { Injectable } from '@angular/core';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' }
  ];

  constructor() { }

  signUp(username: string, password: string): boolean {
    const userExists = this.users.some(user => user.username === username);
    if (userExists) {
      return false; // User already exists
    }
    this.users.push({ username, password });
    return true;
  }

  signIn(username: string, password: string): boolean {
    return this.users.some(user => user.username === username && user.password === password);
  }
}