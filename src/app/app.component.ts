/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  public dcLogo = 'assets/img/logo.png';
  public name = 'Angular 2 Tutorial';
  public url = 'https://twitter.com/miguelcanot';

  constructor(
  ) {}

  public ngOnInit() {
    console.log('Initial App State');
  }

}