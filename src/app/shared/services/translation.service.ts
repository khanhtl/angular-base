import { TranslateService } from '@ngx-translate/core';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(private translateService: TranslateService) {

  }
  /**
   *
   * @param key
   * @param params
   */
  getValueByKey(key: string, params?: Object) {
    return this.translateService.instant(key, params);
  }
  /**
   *
   * @param lang
   */
  setLanguage(lang: string) {
    this.translateService.use(lang);
  }
}
