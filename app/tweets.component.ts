import {Component} from 'angular2/core';
import {TweetService} from './tweet.service';
import {LikeComponent} from './like.component';

@Component({
  selector: 'tweets',
  styles: [`
    .handle {
      color: #ccc;
    }
  `],
  template: `
    <div id="tweets">
    <div class="media" *ngFor="#tweet of tweets">
      <div class="media-left">
        <a href="#">
          <img class="media-object" [src]="tweet.image" [alt]="tweet.userName">
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">{{ tweet.userName }} <span class="handle">{{tweet.handle}}</span></h4>
          <p>{{ tweet.content }}</p>
          <div><like [likesCount]="tweet.likesCount"></like></div>
      </div>
      </div>
    </div>
  `,
  providers: [TweetService],
  directives: [LikeComponent]
})

export class TweetsComponent {

  tweets; 

  constructor(tweetService:TweetService) {
    this.tweets = tweetService.getList();
  }
}
