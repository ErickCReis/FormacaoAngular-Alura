import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public open(config: ModalConfig): ModalRef {
    console.log('ModalService.open()');
    return new ModalRef();
  }
}

export interface ModalConfig {
  templateRef: TemplateRef<any>;
  title: string;
}

export class ModalRef {
  public close(): void {
    console.log('Modal.close()');
  }
}
