import {Component} from 'angular2/core';
import {ZippyComponent} from './zippy.component';
import {ChangePasswordFormComponent} from './change-password-form/change-password-form.component'

@Component({
    selector: 'my-app',
    template: `
    <div>
      <zippy title="This is my title">
        This is the content of the zippy
      </zippy>

      <zippy title="This is my title 2">
        This is the content of the zippy, second try
      </zippy>
    </div>
    <change-password-form></change-password-form>
    `,
    directives: [ZippyComponent, ChangePasswordFormComponent]
})

export class AppComponent { 
    
 post = { 
   title: 'Test', 
   isFavorite: true,
   likesCount: 12,
   voteCount: 10
 }

}
