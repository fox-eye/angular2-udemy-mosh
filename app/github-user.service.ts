import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubUser {

  private _userBaseUrl = "https://api.github.com/users/";
  
  constructor(private _http: Http) {
  }

  getUser(userName:string) {
     return this._http.get(this._userBaseUrl + userName)
      .map(res => res.json());
  }

  getFollowers(userName:string) {
    return this._http.get(this._userBaseUrl + userName + '/followers')
      .map(res => res.json());
  }
  
}
