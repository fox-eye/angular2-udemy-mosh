export class TweetService {
  
  getList() {
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
  }
}
