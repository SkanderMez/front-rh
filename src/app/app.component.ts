import { Component } from '@angular/core';
import {Globals} from './_globals/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume-wevioo';

  constructor(private globals: Globals) {

  }

  get loading() {
    return this.globals.loading;
  }
}
