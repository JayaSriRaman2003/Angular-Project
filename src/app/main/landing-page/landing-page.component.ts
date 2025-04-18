import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TweetService } from '../tweet.service';  // Import the service

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  userForm: FormGroup;
  tweetData: { title: string, imageUrl: string, description: string } | null = null;

  constructor(private fb: FormBuilder, private tweetService: TweetService) {
    this.userForm = this.fb.group({
      title: ['', Validators.required],
      imageUrl: ['', [Validators.required]],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.tweetData = this.userForm.value;
      this.tweetService.setTweetData(this.tweetData);  // Save the data to the service
      this.userForm.reset(); // Optionally reset the form after submission
    }
  }
}
