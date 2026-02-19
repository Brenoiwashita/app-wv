import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { Router } from '@angular/router';

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

const TAG_NAME = 'mfe-shell-root';

(async () => {
  const app = await createApplication(appConfig);
  const injector = app.injector;

  // In an Angular Elements (Web Component) setup, the Router may not perform
  // the initial navigation automatically. Trigger it so <router-outlet> can render.
  try {
    const router = injector.get(Router, null);
    router?.initialNavigation();
  } catch {
    // If Router isn't provided, do nothing.
  }

  const element = createCustomElement(AppComponent, { injector });

  if (!customElements.get(TAG_NAME)) {
    customElements.define(TAG_NAME, element);
  }
})();