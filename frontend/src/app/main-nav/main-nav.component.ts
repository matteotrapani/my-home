import {Component, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  @ViewChild('drawer',  { static: true }) drawerElement;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      // close sidenav on routing
      if (this.drawerElement.mode === 'over') {
        this.drawerElement.close();
      }
    });

  }

}
