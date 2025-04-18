import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert/alert.service';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent {
  email = '';
  newPassword = '';
 
   constructor(private authService: AuthService, private router: Router, private alertService : AlertService) {}
 
   onForget() {
     if (!this.email || !this.newPassword) {
       this.alertService.showAlert('Enter All The Fields', 'error')
       // alert('Enter all the fields');
       console.log(this.email);
       return;
     }

     if (this.newPassword.length < 6) {
       this.alertService.showAlert('Password must be at least 6 characters long.', 'error')
       // alert('Password must be at least 6 characters long.');
       return;
     }
     
 
     const success = this.authService.forgetUser(this.email, this.newPassword);
     if (success) {
       this.alertService.showAlert('Password Changed successful!', 'success')
       // alert('Password Changed successful!');
       this.router.navigate(['/login']);
     } else {
       this.alertService.showAlert('Invalid email or password!', 'info')
       // alert('Invalid email or password!');
     }
   }
}
