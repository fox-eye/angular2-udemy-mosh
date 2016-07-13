import {Component} from 'angular2/core';
import {ArchivesComponent} from './archives.component';
import {ArchiveComponent} from './archive.component';

import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@RouteConfig([
  { path: '/', name: 'Archives', component: ArchivesComponent, useAsDefault: true },
  { path: '/archives/:year/:month', name: 'Archive', component: ArchiveComponent },
  { path: '/*other', name: 'Other', redirectTo: ['Archives'] }
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}
