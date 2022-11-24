import { Component, Input } from '@angular/core';

const template = `
  <h1>{{ $state$.name }} loaded</h1>
  <ui-view></ui-view>
`;

const styles = `
  p {
    font-family: Lato;
  }
`;


@Component({
  selector: 'generic-component',
  template: template,
  styles: [ styles ],
})
export class GenericComponent  {
  @Input() $state$;
}
