import { Component } from "angular2/core";

@Component( {
  selector: 'archives',
  template: `
    <ul>
      <li *ngFor="#archive in archives">
        {{ archive.year }} / {{ archive.month }}
      </li>
    </ul>
  `
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
  ]
}
