import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

const TAG_NAME = 'mfe-shell-root';

(async () => {
  const app = await createApplication(appConfig);
  const injector = app.injector;

  const element = createCustomElement(AppComponent, { injector });

  if (!customElements.get(TAG_NAME)) {
    customElements.define(TAG_NAME, element);
  }
})();