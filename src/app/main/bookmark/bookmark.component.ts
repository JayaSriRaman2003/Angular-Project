import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent {
  bookmarks = [
    {
      title: 'Angular Tips & Tricks',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
      description: 'lorem ipsum.'
    },
    {
      title: 'RxJS Cheat Sheet',
      imageUrl: 'https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png',
      description: 'lorem ipsum.'
    },
    {
      title: 'State Management Guide',
      imageUrl: 'https://ngrx.io/assets/images/badge.svg',
      description: 'lorem ipsum.'
    }
  ];
}
