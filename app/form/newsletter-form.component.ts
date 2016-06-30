import {Component} from 'angular2/core';

@Component({
  selector: 'newsletter-form',
  templateUrl: 'app/form/newsletter.template.html',
  styles: [`
    #newsletter {
      width: 600px;
    }
  `]
})

export class NewsletterFormComponent {

  onSubmit(form) {
    console.log(form); 
  }
}
