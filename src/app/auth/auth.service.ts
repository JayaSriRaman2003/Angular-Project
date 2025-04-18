import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private storageKey = 'users';

  registerUser(user: User): boolean {
    const users = this.getUsers();
    const existing = users.find(u => u.email === user.email);
    if (existing) return false;

    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
    return true;
  }


  loginUser(email: string, password: string): boolean {
    const users = this.getUsers();
    const found = users.find(u => u.email === email && u.password === password);
    if (found) {
      localStorage.setItem('currentUser', JSON.stringify(found));
      return true;
    }
    return false ;
  }


  getCurrentUser(): User | null {
    const userData = localStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null;
  }


  logout(): void {
    localStorage.removeItem('currentUser');
  }


  forgetUser(email: string, newPass: string): boolean {
    const users = this.getUsers();
    const userIndex = users.findIndex(u => u.email === email);

    if (userIndex === -1) return false;

    users[userIndex].password = newPass;
    users[userIndex].confirmPassword = newPass; // If you need confirmPassword (else remove this line)
    localStorage.setItem(this.storageKey, JSON.stringify(users));
    return true;
  }


  private getUsers(): User[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }
}
