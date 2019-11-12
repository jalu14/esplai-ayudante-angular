import { TemplateRef, ViewChild } from '@angular/core';

export class ModalTemplate {
  @ViewChild('template', {static: true}) public templateRef: TemplateRef<any>;
}
