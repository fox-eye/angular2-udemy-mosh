import {Component, EventEmitter, Input, Output} from 'angular2/core';

@Component(
  {
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles: [`
        .glyphicon-star {
          color: orange; 
        }
    `]
  })

export class FavoriteComponent {

  @Input('is-active') isActive = false;
  @Output() change = new EventEmitter();

  toggleActiveState() {
    this.isActive = !this.isActive;
    this.change.emit({ newValue: this.isActive });
  }
}
