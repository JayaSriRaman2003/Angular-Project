import { Component } from '@angular/core';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent {
  tweetData: { title: string, imageUrl: string, description: string } | null = null;

  constructor(private tweetService: TweetService) {}

  ngOnInit() {
    this.tweetData = this.tweetService.getTweetData();  // Get the tweet data from the service
  }
}
