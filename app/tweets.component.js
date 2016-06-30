System.register(['angular2/core', './tweet.service', './like.component'], function(exports_1, context_1) {
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
    var core_1, tweet_service_1, like_component_1;
    var TweetsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            TweetsComponent = (function () {
                function TweetsComponent(tweetService) {
                    this.tweets = tweetService.getList();
                }
                TweetsComponent = __decorate([
                    core_1.Component({
                        selector: 'tweets',
                        styles: ["\n    .handle {\n      color: #ccc;\n    }\n  "],
                        template: "\n    <div id=\"tweets\">\n    <div class=\"media\" *ngFor=\"#tweet of tweets\">\n      <div class=\"media-left\">\n        <a href=\"#\">\n          <img class=\"media-object\" [src]=\"tweet.image\" [alt]=\"tweet.userName\">\n        </a>\n      </div>\n      <div class=\"media-body\">\n        <h4 class=\"media-heading\">{{ tweet.userName }} <span class=\"handle\">{{tweet.handle}}</span></h4>\n          <p>{{ tweet.content }}</p>\n          <div><like [likesCount]=\"tweet.likesCount\"></like></div>\n      </div>\n      </div>\n    </div>\n  ",
                        providers: [tweet_service_1.TweetService],
                        directives: [like_component_1.LikeComponent]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], TweetsComponent);
                return TweetsComponent;
            }());
            exports_1("TweetsComponent", TweetsComponent);
        }
    }
});
//# sourceMappingURL=tweets.component.js.map