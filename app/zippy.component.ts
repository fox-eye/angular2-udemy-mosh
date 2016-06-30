import {Component} from 'angular2/core';
import {Input} from 'angular2/core';

@Component({ 
  selector: 'zippy',
  styles: [` 
    .zippy {
      width: 80%;
    }
    .zippy-header {
      padding: 5px; 
    }

    .zippy-header:hover{
     background-color: lightgrey; 
    }
  `],
  template: `
    <div class='zippy'>
      <div class='zippy-header' (click)="toggle()">
        {{ title }}
        <i class="glyphicon pull-right" [ngClass]="{
          'glyphicon-chevron-down': !isOpened,
          'glyphicon-chevron-up': isOpened
          }"></i>
      </div>
      <div class='zippy-content' *ngIf="isOpened">
        <ng-content></ng-content>
      </div>
    </div>
  `
})

export class ZippyComponent {
 
  @Input() title:string;
  isOpened = false;

  toggle() {
    this.isOpened = !this.isOpened;
  }
}
