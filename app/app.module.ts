import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { UIView, UIRouter, UIRouterModule } from '@uirouter/angular';
import { Visualizer } from '@uirouter/visualizer';

import { GenericComponent } from './generic.component';
import { AppComponent } from './app.component';

export const states = [
  { name: 'home', url: '/home', component: GenericComponent },
  { name: 'about', url: '/about', component: GenericComponent },
];

export function config(uiRouter: UIRouter) {
  if (window['visualizer']) window['visualizer'].dispose();
  window['visualizer'] = uiRouter.plugin(Visualizer);
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    UIRouterModule.forRoot({
      states: states,
      initial: { state: 'home' },
      useHash: false,
    }),
  ],
  declarations: [GenericComponent, AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
