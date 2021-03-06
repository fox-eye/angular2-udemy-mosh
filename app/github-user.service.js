System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var GithubUser;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            GithubUser = (function () {
                function GithubUser(_http) {
                    this._http = _http;
                    this._userBaseUrl = "https://api.github.com/users/";
                }
                GithubUser.prototype.getUser = function (userName) {
                    return this._http.get(this._userBaseUrl + userName)
                        .map(function (res) { return res.json(); });
                };
                GithubUser.prototype.getFollowers = function (userName) {
                    return this._http.get(this._userBaseUrl + userName + '/followers')
                        .map(function (res) { return res.json(); });
                };
                GithubUser = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], GithubUser);
                return GithubUser;
            }());
            exports_1("GithubUser", GithubUser);
        }
    }
});
//# sourceMappingURL=github-user.service.js.map