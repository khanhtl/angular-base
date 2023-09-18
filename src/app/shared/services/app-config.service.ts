import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig!: AppConfig;
  readonly http = inject(HttpClient);

  loadAppConfig() {
    return this.http.get('/assets/configs/app-config.json')
      .toPromise()
      .then(config => {
        this.appConfig = <AppConfig>config;
      });
  }

  get apiBaseUrl() : string {
    return this.appConfig.apiBaseUrl;
  }
}
