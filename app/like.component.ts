import {Component, Input} from 'angular2/core';

@Component({
  selector: 'like', 
  templateUrl: 'app/like.template.html',
  styles: [`
    i {
      color: #ccc;
      cursor: pointer;
    }

    i.liked {
      color: deeppink;
    }
  `]
})

export class LikeComponent {

  @Input() likesCount = 0;
  isLiked = false;

  addLike() {
    this.isLiked = !this.isLiked;
    this.likesCount+= (this.isLiked) ? 1: -1; 
  }

}
