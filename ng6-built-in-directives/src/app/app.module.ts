import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { NgNonBindableExampleComponent } from './ng-non-bindable-example/ng-non-bindable-example.component';
import { ExampleDef } from './example.module';

/*
 * Here's the master list of our examples for this chapter.
 */
export const examples: ExampleDef[] = [
  {label: 'Intro',          name: 'Root',          path: '',                component: IntroComponent},
  {label: 'NgFor',          name: 'NgFor',         path: 'ng_for',          component: NgForExampleComponent },
  {label: 'NgSwitch',       name: 'NgSwitch',      path: 'ng_switch',       component: NgSwitchExampleComponent },
  {label: 'NgStyle',        name: 'NgStyle',       path: 'ng_style',        component: NgStyleExampleComponent },
  {label: 'NgClass',        name: 'NgClass',       path: 'ng_class',        component: NgClassExampleComponent },
  {label: 'NgNonBindable',  name: 'NgNonBindable', path: 'ng_non_bindable', component: NgNonBindableExampleComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SidebarComponent,
    NgClassExampleComponent,
    NgForExampleComponent,
    NgStyleExampleComponent,
    NgSwitchExampleComponent,
    NgNonBindableExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
