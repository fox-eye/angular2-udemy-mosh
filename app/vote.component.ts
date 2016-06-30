import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'vote', 
  templateUrl: 'app/vote.template.html',
  styles: [`
    div {
      width: 20px;
      text-align: center;
      color: #ccc;
    }

    .glyphicon {
      curstor: pointer;
    }

    .highlighted {
      color: orange;
    }
  `]
})

export class VoteComponent {
  @Input() myVote = 0;
  @Input() voteCount = 0;
  
  @Output() vote = new EventEmitter();

  isUpVote() {
    return this.myVote === 1;
  }

  isDownVote() {
    return this.myVote === -1;
  }

  voteUp() {
    if(this.isUpVote()) {
      return;
    }
    this.myVote = (this.myVote === -1) ? 0 : 1;
    this.updateVote(1);
  }

  voteDown() {
    if(this.isDownVote()) {
      return;
    }
    this.myVote = (this.myVote === 1) ? 0 : -1;
    this.updateVote(-1);
  }

  updateVote(value) {
    this.vote.emit({ userVote: this.myVote });
    this.voteCount += value; 
  }
}
