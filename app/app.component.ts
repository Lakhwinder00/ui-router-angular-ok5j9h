import { Component, Input } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <a uiSref="home" uiSrefActive="active">Home</a>
    <a uiSref="about" uiSrefActive="active">About</a>
    <ui-view></ui-view>
  `,
})
export class AppComponent  {
}
