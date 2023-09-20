import { LayoutModule } from './layout/layout.module';
import { AppConfigService } from './shared/services';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locales/', '.json');
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      },
      defaultLanguage: 'vi'
  }),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide : APP_INITIALIZER,
		  multi : true,
		  deps : [AppConfigService],
		  useFactory : (appConfigService : AppConfigService) =>  () => appConfigService.loadAppConfig()
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
