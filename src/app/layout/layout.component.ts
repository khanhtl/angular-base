import { AppConfigService } from './../shared/services/app-config.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  private readonly appConfigService=inject(AppConfigService);
  ngOnInit() {
    console.log(this.appConfigService.apiBaseUrl);

  }
}
