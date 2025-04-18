import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {
    // username: '',
    email: '',
    password: '',
    confirmPassword : ''
  };

  constructor(private authService: AuthService, private router: Router, private alertService : AlertService) {}

  onSubmit() {

    if (!this.user.email || !this.user.password || !this.user.confirmPassword) {
      this.alertService.showAlert('Enter All The Fields', 'error')
      // alert('Enter All The Fields');

      
      return;
    }


    if (!this.user.password || this.user.password.length < 6) {
      this.alertService.showAlert('Password must be at least 6 characters long.', 'error')
      // alert('Password must be at least 6 characters long.');
      return;
    }

    if (this.user.password !== this.user.confirmPassword) {
      this.alertService.showAlert('Passwords do not match!', 'error')
      // alert('Passwords do not match!');
      return;
    }

    const isRegistered = this.authService.registerUser(this.user);
    if (isRegistered) {
      this.alertService.showAlert('Registration successful!', 'success')
      // alert('Registration successful!');
      this.router.navigate(['/login']);
    } else {
      this.alertService.showAlert('Email already exists!', 'info')
      // alert('Email already exists!');
    }
  }
}
