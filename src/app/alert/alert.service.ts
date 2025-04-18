import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new Subject<{ message: string, type: 'success' | 'error' | 'info' }>();
  alert$ = this.alertSubject.asObservable();  //observableaa treat pannum

  showAlert(message: string, type: 'success' | 'error' | 'info') {
    this.alertSubject.next({ message, type });
  }
}
