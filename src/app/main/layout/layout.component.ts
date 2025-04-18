import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert/alert.service';
import { AuthService } from 'src/app/auth/auth.service';
import { MainService } from '../main.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  currentUserName = "";
  recData = '';

    
  
  constructor(private sha : MainService ,private authService: AuthService, private router: Router, private alert : AlertService) {}

    updateData() {

      if(this.name == ""){
        this.alert.showAlert('Please enter tweet Message', 'error')
      }
      this.sha.changeData(this.name);
    }

    deleteData() {
      this.sha.clearData();
    }
  
    name: string = '';
  
    ngOnInit(): void {
      this.getCurrentUser();

      
      this.sha.currentData.subscribe(data => {
        this.recData = data;
      });
    }
  
    getCurrentUser() {
      const user = this.authService.getCurrentUser();
      this.currentUserName = user?.email || '';
    }
  
    logout() {
      this.authService.logout();
      this.alert.showAlert("Logout Successful!", "info")
      this.router.navigate(['/auth/login']);
    }

    Explore() {
      this.router.navigate(['/home/explore']);
    }

    Message() {
      this.router.navigate(['/home/message']);
    }
}
