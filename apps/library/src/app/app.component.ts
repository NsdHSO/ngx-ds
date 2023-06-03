import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NgxBtxDirective } from "ngx-ds";

@Component({
  standalone: true,
  imports: [ NxWelcomeComponent, RouterOutlet, NgxBtxDirective ],
  selector: 'library-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'library';
}
