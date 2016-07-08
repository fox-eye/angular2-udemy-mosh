import {Component} from 'angular2/core';
import {GithubUserComponent} from './github-user.component';

@Component({
    selector: 'my-app',
    template: `
     <github-user userName="octocat"></github-user>
     <github-user userName="fox-eye"></github-user>
    `,
    directives: [GithubUserComponent]
})

export class AppComponent { 

  constructor() {
  }
}
