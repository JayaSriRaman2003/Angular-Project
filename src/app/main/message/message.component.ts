import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  msg: string[] = [];

  text1: string = '';
  text2: string = '';
  text3: string = '';


  msgForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.msgForm = this.fb.group({
      text: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.msgForm.valid) {
      const userMessage = this.msgForm.value.text;
      this.msg.push(userMessage);


      if (this.msg.length > 3) {
        this.msg.shift();
      }


      this.text1 = this.msg[0] || '';
      this.text2 = this.msg[1] || '';
      this.text3 = this.msg[2] || '';


      this.msgForm.reset();
    }
  }

}
