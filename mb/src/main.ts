import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import './polyfills';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err))



platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window ['ngRef'] = ref;

}).catch(err => console.error(err));