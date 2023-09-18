import { TranslateService } from '@ngx-translate/core';
import { EventEmitter, Injectable, Output, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {
  constructor() {

  }

  @Output() updateData = new EventEmitter<any>();
  onUpdateData(data: any) {
    this.updateData.emit(data)
  }
}
