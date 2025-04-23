import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeRu from '@angular/common/locales/ru';
import localeDe from '@angular/common/locales/de';
import localeZh from '@angular/common/locales/zh';
import { LocaleService } from './services/locale.service';

registerLocaleData(localeRu, 'ru');
registerLocaleData(localeDe, 'de');
registerLocaleData(localeZh, 'zh');
registerLocaleData(localeEs, 'es');
registerLocaleData(localeFr, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    {
      provide: LOCALE_ID,
      // useValue: 'zh',
      deps: [LocaleService],
      useFactory: (localService: LocaleService) => localService.getlocale,
    },
  ],
};
