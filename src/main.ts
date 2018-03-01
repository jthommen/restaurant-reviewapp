import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// rxjs Imports
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

if (environment.production) {
  enableProdMode();
}

// Platform Browser Initialization with Service Worker Registration
platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  if ('serviceWorker' in navigator && environment.production) {
    navigator.serviceWorker.register('/ngsw-worker.js');
  }
})
.then(() => console.log('Service-Worker Registered!'))
.catch(err => console.log(err));
