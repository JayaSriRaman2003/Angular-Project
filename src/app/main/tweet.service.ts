import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private tweetData: { title: string, imageUrl: string, description: string } | null = null;

  setTweetData(data: { title: string, imageUrl: string, description: string } | null) {
    this.tweetData = data;
  }

  getTweetData() {
    return this.tweetData;
  }
}
