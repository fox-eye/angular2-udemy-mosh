System.register(['angular2/core', 'angular2/common', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, Rx_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(fb) {
                    this.form = fb.group({
                        search: []
                    });
                    // Observables - angular way
                    var search = this.form.find('search');
                    search.valueChanges
                        .debounceTime(400)
                        .map(function (str) { return str.replace(' ', '-'); })
                        .subscribe(function (x) { return console.log(x); });
                    // Observables from array
                    var startDates = [];
                    var startDate = new Date(); // Assuming today for simplicity
                    for (var day = -2; day <= 2; day++) {
                        var date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + day);
                        startDates.push(date);
                    }
                    Rx_1.Observable
                        .fromArray(startDates)
                        .map(function (date) {
                        console.log("Getting deals for date " + date);
                        return [1, 2, 3];
                    })
                        .subscribe(function (x) { return console.log(x); });
                    // Create Observable from a list of arguments (and other ways)
                    // returns an observable with one item: 1
                    Rx_1.Observable.of(1).subscribe(function (x) { return console.log(x); });
                    // Returns an observable with three items: 1,2,3
                    Rx_1.Observable.of(1, 2, 3).subscribe(function (x) { return console.log(x); });
                    // Returns an observable with one item [1,2,3]
                    Rx_1.Observable.of([1, 2, 3]).subscribe(function (x) { return console.log(x); });
                    Rx_1.Observable.empty().subscribe(function (x) { return console.log('empty ', x); });
                    Rx_1.Observable.range(1, 5).subscribe(function (x) { return console.log('range - ', x); });
                    Rx_1.Observable.fromArray([1, 2, 3]).subscribe(function (x) { return console.log('from array - ', x); });
                    // Implementing a timer
                    // var observable = Observable.interval(1000);
                    // observable
                    //   .flatMap(x => { 
                    //       console.log("calling the server to get the latest news");
                    //       return Observable.of([1,2,3]);
                    //   })
                    //   .subscribe(news => console.log(news));
                    // Parallel operations
                    var userStream = Rx_1.Observable.of({
                        userId: 1, username: 'mosh' }).delay(2000);
                    var tweetsStream = Rx_1.Observable.of([1, 2, 3]).delay(1500);
                    Rx_1.Observable.forkJoin(userStream, tweetsStream)
                        .map(function (joined) { return new Object({ user: joined[0], tweets: joined[1] }); })
                        .subscribe(function (result) { return console.log(result); });
                    // Handling errors
                    var observable = Rx_1.Observable.throw(new Error("Something failed."));
                    observable
                        .subscribe(function (x) { return console.log(x); }, function (error) { return console.log(error); });
                    // simulate an ajax call that fails twice and succeeds the third time
                    var counter = 0;
                    var ajaxCall = Rx_1.Observable.of('url')
                        .flatMap(function () {
                        if (++counter < 2) {
                            return Rx_1.Observable.throw(new Error("Request failed"));
                        }
                        return Rx_1.Observable.of([1, 2, 3]);
                    });
                    ajaxCall
                        .retry(3)
                        .subscribe(function (x) { return console.log('success - ', x); }, function (error) { return console.log('error = ', error); });
                    // Catching and continuing
                    var remoteDataStream = Rx_1.Observable.throw(new Error("Something failed"));
                    remoteDataStream.catch(function (err) {
                        var localDataStream = Rx_1.Observable.of([1, 2, 3]);
                        return localDataStream;
                    })
                        .subscribe(function (x) { return console.log('catch ', x); });
                    // Timeouts
                    var remoteDataStream = Rx_1.Observable.of([1, 2, 3]).delay(5000);
                    remoteDataStream
                        .timeout(1000)
                        .subscribe(function (x) { return console.log(x); }, function (error) { return console.log(error); }); // Get this after 1000 milliseconds of waiting
                    ;
                    // Get notified on completion of observable
                    Rx_1.Observable.throw(new Error("error"))
                        .subscribe(function (x) { return console.log(x); }, function (error) { return console.log(error); }, function () { return console.log('completed'); });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n     <form [ngFormModel]=\"form\">\n      <input type=\"text\" ngControl=\"search\" />\n     </form>\n    ",
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map