System.register(['angular2/core', './github-user.service', 'rxjs/Observable', 'rxjs/add/observable/forkJoin', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, github_user_service_1, Observable_1, core_2, http_1;
    var GithubUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (github_user_service_1_1) {
                github_user_service_1 = github_user_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            GithubUserComponent = (function () {
                function GithubUserComponent(_githubUser) {
                    this._githubUser = _githubUser;
                    this.isLoading = true;
                }
                GithubUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    Observable_1.Observable.forkJoin(this._githubUser.getUser(this.userName), this._githubUser.getFollowers(this.userName))
                        .map(function (res) { return new Object({ user: res[0], followers: res[1] }); })
                        .subscribe(function (data) {
                        _this.isLoading = false;
                        _this.githubData = data;
                    });
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Object)
                ], GithubUserComponent.prototype, "userName", void 0);
                GithubUserComponent = __decorate([
                    core_1.Component({
                        selector: 'github-user',
                        template: "\n    <div *ngIf=\"isLoading\">\n      <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n    </div>\n    <div *ngIf=\"!isLoading\">\n      <div>\n       <h2>@{{ githubData.user.name }}</h2>\n       <img [src]=\"githubData.user.avatar_url\" class=\"avatar\" />\n      </div>\n      <h2>Followers</h2>\n      <div class=\"media\" *ngFor=\"#follower of githubData.followers\">\n        <div  class=\"media-left\">\n          <a href=\"#\">\n            <img class=\"media-object avatar\" [src]=\"follower.avatar_url\">\n          </a>\n        </div>\n        <div class=\"media-body\">\n          <h4 class=\"media-heading\">{{ follower.login}}</h4>\n  </div>\n      </div>\n    </div>\n  ",
                        styles: ["\n      .avatar {\n        width: 100px;\n        height: 100px;\n        border-radius: 100%;\n      }\n    "],
                        providers: [github_user_service_1.GithubUser, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [github_user_service_1.GithubUser])
                ], GithubUserComponent);
                return GithubUserComponent;
            }());
            exports_1("GithubUserComponent", GithubUserComponent);
        }
    }
});
//# sourceMappingURL=github-user.component.js.map