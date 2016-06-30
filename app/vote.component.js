System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.myVote = 0;
                    this.voteCount = 0;
                    this.vote = new core_1.EventEmitter();
                }
                VoteComponent.prototype.isUpVote = function () {
                    return this.myVote === 1;
                };
                VoteComponent.prototype.isDownVote = function () {
                    return this.myVote === -1;
                };
                VoteComponent.prototype.voteUp = function () {
                    if (this.isUpVote()) {
                        return;
                    }
                    this.myVote = (this.myVote === -1) ? 0 : 1;
                    this.updateVote(1);
                };
                VoteComponent.prototype.voteDown = function () {
                    if (this.isDownVote()) {
                        return;
                    }
                    this.myVote = (this.myVote === 1) ? 0 : -1;
                    this.updateVote(-1);
                };
                VoteComponent.prototype.updateVote = function (value) {
                    this.vote.emit({ userVote: this.myVote });
                    this.voteCount += value;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "vote", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        templateUrl: 'app/vote.template.html',
                        styles: ["\n    div {\n      width: 20px;\n      text-align: center;\n      color: #ccc;\n    }\n\n    .glyphicon {\n      curstor: pointer;\n    }\n\n    .highlighted {\n      color: orange;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map