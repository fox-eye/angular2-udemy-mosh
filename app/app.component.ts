import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `
     <form [ngFormModel]="form">
      <input type="text" ngControl="search" />
     </form>
    `,
    directives: []
})

export class AppComponent { 
 
  form: ControlGroup;

  constructor(fb:FormBuilder) {
    this.form = fb.group({
      search: []
    });

    // Observables - angular way
    var search = this.form.find('search');
    search.valueChanges
    .debounceTime(400)
    .map(str => (<string>str).replace(' ', '-'))
    .subscribe(x => console.log(x));

    // Observables from array
    var startDates = [];
    var startDate = new Date(); // Assuming today for simplicity
    for(var day = -2; day <= 2; day++) {
      var date = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + day)
        startDates.push(date);
    }

    Observable
    .fromArray(startDates)
    .map(date => {
      console.log("Getting deals for date " + date);
      return [1,2,3];
    })
    .subscribe(x => console.log(x));

    // Create Observable from a list of arguments (and other ways)

    // returns an observable with one item: 1
    Observable.of(1).subscribe(x => console.log(x));

    // Returns an observable with three items: 1,2,3
    Observable.of(1,2,3).subscribe(x => console.log(x));

    // Returns an observable with one item [1,2,3]
    Observable.of([1,2,3]).subscribe(x => console.log(x));

    Observable.empty().subscribe(x => console.log('empty ', x));

    Observable.range(1,5).subscribe(x => console.log('range - ', x));

    Observable.fromArray([1,2,3]).subscribe(x => console.log('from array - ', x));

    // Implementing a timer
    // var observable = Observable.interval(1000);
    // observable
    //   .flatMap(x => { 
    //       console.log("calling the server to get the latest news");
    //       return Observable.of([1,2,3]);
    //   })
    //   .subscribe(news => console.log(news));

    // Parallel operations
    var userStream = Observable.of({ 
      userId: 1, username: 'mosh'}).delay(2000);

      var tweetsStream = Observable.of([1,2,3]).delay(1500);

      Observable.forkJoin(userStream, tweetsStream)
      .map(joined => new Object({ user: joined[0], tweets: joined[1]}))
      .subscribe(result => console.log(result));

    // Handling errors
    var observable = Observable.throw(new Error("Something failed."));
    observable
    .subscribe(
      x => console.log(x),
      error => console.log(error)
    );

    // simulate an ajax call that fails twice and succeeds the third time
    var counter = 0;
    var ajaxCall = Observable.of('url')
    .flatMap(() => {
      if(++counter < 2) {
        return Observable.throw(new Error("Request failed"));
      }
      return Observable.of([1,2,3]);
    }
    );

    ajaxCall
      .retry(3)
      .subscribe(
        x => console.log('success - ', x),
        error => console.log('error = ', error)
      );

    // Catching and continuing
    var remoteDataStream = Observable.throw(new Error("Something failed"));    
    remoteDataStream.catch(err => {
      var localDataStream = Observable.of([1,2,3]);
      return localDataStream;
    })
    .subscribe(x => console.log('catch ', x));

    // Timeouts
    var remoteDataStream = Observable.of([1,2,3]).delay(5000);

    remoteDataStream
      .timeout(1000)
      .subscribe(
          x => console.log(x),
          error => console.log(error); // Get this after 1000 milliseconds of waiting
      );

    // Get notified on completion of observable
    Observable.throw(new Error("error"))
      .subscribe(
        x => console.log(x),
        error => console.log(error),
        () => console.log('completed')
      );
  }
}
