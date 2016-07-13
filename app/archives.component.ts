import { Component } from "angular2/core";
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component( {
  selector: 'archives',
  template: `
    <ul>
      <li *ngFor="#archive of archives">
        <a [routerLink]="['Archive', { year: archive.year, month: archive.month }]"> {{ archive.year }}/{{ archive.month }} </a>      
      </li>
    </ul>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class ArchivesComponent {

  archives= [
    {
      year: 2016,
      month: 12
    },
    {
      year: 2013,
      month: 09
    },
    {
      year: 2012,
      month: 11
    }
  ];
}
