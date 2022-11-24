import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  window['ngRef'] && window['ngRef'].destroy();
  window['ngRef'] = ref;

  // Otherise, log the boot error
}).catch(err => console.error(err));