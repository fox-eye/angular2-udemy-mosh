import {Component} from 'angular2/core';
import {Router, CanDeactivate} from 'angular2/router';

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent implements CanDeactivate {
    onSubmit(form){
      console.log(form);
      this._router.navigate(['Albums']);
    }

    constructor(private _router: Router) {
    }

    routerCanDeactivate(next, previous) {
      return confirm('are you sure ?');
    }
}
