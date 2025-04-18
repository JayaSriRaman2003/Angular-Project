import { Component } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  message: string | null = null;
  type: 'success' | 'error' | 'info' = 'info';

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.alert$.subscribe((alert) => {
      this.message = alert.message;
      this.type = alert.type;

      // Optionally, automatically hide after 3 seconds
      setTimeout(() => {
        this.message = null;
      }, 2000);
    });
  }
}
