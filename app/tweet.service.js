System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getList = function () {
                    return [{
                            image: 'http://lorempixel.com/100/100/people/?1',
                            userName: 'Jack Bower',
                            handle: '@JacoLeCoco',
                            content: 'Hello Guys',
                            likesCount: 12
                        },
                        {
                            image: 'http://lorempixel.com/100/100/people/?2',
                            userName: 'George Abitbol',
                            handle: '@abitbolG',
                            content: 'It rains, as usual!',
                            likesCount: 9
                        }
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map