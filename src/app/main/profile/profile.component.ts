import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const cureUser = this.authService.getCurrentUser();

    if (cureUser) {
      this.user.email = cureUser.email;
      this.user.password = cureUser.password;
      this.user.confirmPassword = cureUser.confirmPassword;
    }
  }
}
