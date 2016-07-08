import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {GithubUser} from './github-user.service';
// import 'rxjs/add/observable/forkJoin';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import {Input} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'github-user',
  template: `
    <div *ngIf="isLoading">
      <i class="fa fa-spinner fa-spin fa-3x"></i>
    </div>
    <div *ngIf="!isLoading">
      <div>
       <h2>@{{ githubData.user.name }}</h2>
       <img [src]="githubData.user.avatar_url" class="avatar" />
      </div>
      <h2>Followers</h2>
      <div class="media" *ngFor="#follower of githubData.followers">
        <div  class="media-left">
          <a href="#">
            <img class="media-object avatar" [src]="follower.avatar_url">
          </a>
        </div>
        <div class="media-body">
          <h4 class="media-heading">{{ follower.login}}</h4>
  </div>
      </div>
    </div>
  `,
  styles: [`
      .avatar {
        width: 100px;
        height: 100px;
        border-radius: 100%;
      }
    `],
    providers: [GithubUser, HTTP_PROVIDERS]
})

export class GithubUserComponent implements OnInit{
  
  isLoading = true;
  githubData;
  @Input() private userName;

  constructor(private _githubUser: GithubUser) {
  }

  ngOnInit() {
    Observable.forkJoin(
      this._githubUser.getUser(this.userName),
      this._githubUser.getFollowers(this.userName)
    )
    .map(res => new Object({ user: res[0], followers: res[1] }))
    .subscribe(data => { 
      this.isLoading = false;
      this.githubData = data 
    });
  }
}
