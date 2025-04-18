import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email : string= '';
  password : string = '';
 
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) {}

  onLogin() {
    if (!this.email || !this.password) {
      this.alertService.showAlert('Please enter email and password.', 'error');
      return;
    }

    const success = this.authService.loginUser(this.email, this.password);

    if (success) {
      this.alertService.showAlert('Login successful!', 'success');
      setTimeout(() => {
        this.router.navigate(['/main/home']);
      }, 1200);
    } else {
      this.alertService.showAlert('Invalid email or password!', 'error');
    }
  }
}
