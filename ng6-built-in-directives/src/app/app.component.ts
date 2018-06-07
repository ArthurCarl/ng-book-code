import { Component, Inject } from '@angular/core';
import { Route } from '@angular/router';
import { ExampleDef } from './example.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Route,
    @Inject('ExampleDefs') public examples: ExampleDef[]) {
  }
}
